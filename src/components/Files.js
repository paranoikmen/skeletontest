import React, {useEffect, useState} from "react";
import FolderTree, {testData} from 'react-folder-tree';

const Files = ({project, branch, files, setFiles}) => {

    useEffect(() => {
        async function fetchData() {
            const id = project['id']
            let branchName = branch['name'].replace('/', '.')
            const response = await fetch(`http://localhost:4000/files/${id}/${branchName}`)
            setFiles(await response.json())
        }
        fetchData();
    }, [])


    const tree = {
        name: branch['name'],
        checked: 0,
        isOpen: true,
        children: []
    }

    const transformFileTree = () => {
        for (let value of files) {
            if (!value['path'].includes('/')) {
                if (value['type'] === 'tree') {
                    if (value['path'].includes(value['name'])) {
                        tree['children'].push({
                            name: value['name'],
                            checked: 0,
                            children: []
                        })
                    }
                } else if (value['type'] === 'blob') {
                    tree['children'].push({
                        name: value['name'],
                        checked: 0
                    })
                }
            }
        }
        let count = 0
        for (let value of files) {
            recursiveTree(tree['children'], value)
            count++
            console.log(count)
        }

        return tree
    }


    const recursiveTree = (inputChildren, inputFile) => {
        for (let value of inputChildren) {
            if (inputFile['path'].includes(value['name'])) {
                if (inputFile['path'] !== value['name']) {
                    const tmpPath = inputFile['path'].replace('/' + inputFile['name'], '')
                    if (tmpPath.endsWith(value['name'])) {
                        if (inputFile['type'] === 'tree') {
                            value['children'].push(
                                {
                                    name: inputFile['name'],
                                    checked: 0,
                                    children: [],
                                }
                            )
                        } else if (inputFile['type'] === 'blob') {
                            value['children'].push(
                                {
                                    name: inputFile['name'],
                                    checked: 0,
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

    const onTreeStateChange = (state) => console.log('tree state: ', state);

    return <div>
        files
        <FolderTree
            data={transformFileTree()}
            onChange={onTreeStateChange}
            initOpenStatus='custom'
        />
    </div>

}

export default Files;