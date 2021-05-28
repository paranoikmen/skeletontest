import React, {useEffect, useRef, useState} from "react";
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'
import LoaderComp from "./Loader";
import {useParams} from "react-router-dom";
import "./Styles.css"
import Loader from "./Loader";

const Files = ({user}) => {

    const [files, setFiles] = useState([])
    const [fileTree, setFileTree] = useState([])
    let {projectId, branchName} = useParams()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:4000/files/${projectId}/${branchName}/${user['accessToken']}`)
            const data = await response.json()
            setFiles(data)
            setFileTree(transformFileTree(data))
        }

        fetchData();
    }, [user])

    const transformFileTree = (files) => {
        const tree = {
            label: branchName.replace('%2F', '/'),
            value: "root",
            children: [],
            type: "root",
        }
        for (let value of files) {
            if (!value['path'].includes('/')) {
                if (value['type'] === 'tree') {
                    if (value['path'].includes(value['name'])) {
                        tree['children'].push({
                            label: value['name'],
                            value: value['id'],
                            children: [],
                            type: value['type'],
                            path: value['path'],
                        })
                    }
                } else if (value['type'] === 'blob') {
                    tree['children'].push({
                        label: value['name'],
                        value: value['id'],
                        type: value['type'],
                        path: value['path'],
                    })
                }
            }
        }
        for (let value of files) {
            recursiveTree(tree['children'], value)
        }

        return tree
    }

    const recursiveTree = (inputChildren, inputFile) => {
        for (let value of inputChildren) {
            if (inputFile['path'].includes(value['label'])) {
                if (inputFile['path'] !== value['label']) {
                    const tmpPath = inputFile['path'].replace('/' + inputFile['name'], '')
                    if (tmpPath.endsWith(value['label'])) {
                        if (inputFile['type'] === 'tree') {
                            value['children'].push(
                                {
                                    label: inputFile['name'],
                                    value: inputFile['id'],
                                    children: [],
                                    type: inputFile['type'],
                                    path: inputFile['path'],
                                }
                            )
                        } else if (inputFile['type'] === 'blob') {
                            value['children'].push(
                                {
                                    label: inputFile['name'],
                                    value: inputFile['id'],
                                    type: inputFile['type'],
                                    path: inputFile['path'],
                                }
                            )
                        }
                        return
                    } else if (value.hasOwnProperty('children')) {
                        recursiveTree(value['children'], inputFile)
                    }
                }
            }
        }
    }

    let nodes = []

    const returnChildren = (initialFile) => {
        for (let value of initialFile) {
            if (value['type'] === 'tree') {
                returnChildren(value['children'])
            } else nodes.push(value)
        }
    }

    const returnChildOnTree = (initialNode, initialFile = fileTree['children']) => {
        let path = initialNode['path'].split('/')
        for (let value of initialFile) {
            for (let name of path) {
                if (value['label'] === name) {
                    if (value.hasOwnProperty('children')) {
                        returnChildOnTree(initialNode, value['children'])
                    }
                    if (initialNode['path'].endsWith(name)) {
                        returnChildren(value['children'])
                    }
                }
            }
        }
    }

    const findAllCheckedNodes = (selectedNodes) => {
        nodes = []
        for (let value of selectedNodes) {
            if (value['type'] === 'tree') {
                returnChildOnTree(value)
            } else if (value['type'] === 'blob') {
                nodes.push(value)
            } else if (value['type'] === 'root') {
                returnChildren(fileTree['children'])
            }
        }
    }

    function onChange(currentNode, selectedNodes) {
        // currentNode: { label, value, children, expanded, checked, className, ...extraProps }
        // selectedNodes: [{ label, value, children, expanded, checked, className, ...extraProps }]
        findAllCheckedNodes(selectedNodes)
    }

    const [resultOfTests,setResultOfTests] = useState(0)
    async function sendDataOnServer(input) {
        if(nodes.length == 0) {
            return alert("вы не выбрали файлы")
        }
        setResultOfTests(1)
        const response = await fetch(`http://localhost:4000/filecreate/${projectId}/${branchName}/${user['accessToken']}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        })
        if (response.ok) {
            setResultOfTests(2)
            return response.statusCode
        }
    }

    return <div className={"projects_container"}>
        {
            (fileTree.length || files.length) !== 0
                ?
                <div className={"projects_card"}>
                    <h3>Выберите файл:</h3>
                    <DropdownTreeSelect
                        data={fileTree}
                        onChange={onChange}
                        showPartiallySelected={"true"}
                        texts={{placeholder: 'Найти...'}}
                    />
                    <h3>Примечание: система возьмет только .java файлы</h3>
                    <div className={"generate_btn"} onClick={event => sendDataOnServer(nodes)}>
                        Сгенерировать тесты!
                    </div>
                    {
                        resultOfTests === 1 ? <LoaderComp/> :
                        (resultOfTests === 2) && <div>Тесты сгенерировались, поздравляю!</div>
                    }
                </div>
                :
                <div className={"loader_container"}><LoaderComp/></div>
        }
    </div>
}

export default Files;