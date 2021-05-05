import React, {useEffect, useRef, useState} from "react";
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'


const Files = ({project, branch, files, setFiles}) => {

    useEffect(() => {
        async function fetchData() {
            const id = project['id']
            const branchName = branch['name'].replace('/', '.')
            const response = await fetch(`http://localhost:4000/files/${id}/${branchName}`)
            const data = await response.json()
            setFiles(data)
        }
        fetchData();
    }, []) // todo fix memory leaks

    const [fileArr, setFileArr] = useState([])
    const transformFileTree = () => {
        const tree = {
            label: branch['name'],
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
                    } else if(value.hasOwnProperty('children')) {
                        recursiveTree(value['children'], inputFile)
                    }
                }
            }
        }
    }

    const [fileTree, setFileTree] = useState(transformFileTree())
    let nodes = []

    const generateTest = () => {
        setFileTree(transformFileTree())
    }

    const showasdd = () => {
        console.log(nodes)
    }

    const returnChildren = (initialFile) => {
        for(let value of initialFile) {
            if(value['type'] === 'tree') {
                returnChildren(value['children'])
            }
            else nodes.push(value)
        }
    }

    const returnChildOnTree = (initialNode, initialFile = fileTree['children']) => {
        let path = initialNode['path'].split('/')
        for(let value of initialFile) {
            for(let name of path) {
                if(value['label'] === name) {
                    if (value.hasOwnProperty('children')) {
                        returnChildOnTree(initialNode, value['children'])
                    }
                    if(initialNode['path'].endsWith(name)) {
                        returnChildren(value['children'])
                    }
                }
            }
        }
    }

    const findAllCheckedNodes = (selectedNodes) => {
        nodes = []
        for(let value of selectedNodes) {
            if(value['type'] === 'tree') {
                returnChildOnTree(value)
            }
            else if(value['type'] === 'blob') {
                nodes.push(value)
            }
            else if(value['type'] === 'root') {
                returnChildren(fileTree['children'])
            }
        }
    }

    function onChange(currentNode, selectedNodes) {
        // currentNode: { label, value, children, expanded, checked, className, ...extraProps }
        // selectedNodes: [{ label, value, children, expanded, checked, className, ...extraProps }]
        findAllCheckedNodes(selectedNodes)
    }

    return <div>
        files
        <DropdownTreeSelect data={fileTree} onChange={onChange} showPartiallySelected={"true"} />
        <button onClick={generateTest}>
            Сгенерировать тесты!
        </button>
        <button onClick={showasdd}>
            фвфвы
        </button>
    </div>

}

export default Files;