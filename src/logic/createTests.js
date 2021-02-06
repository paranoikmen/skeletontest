
class createTests {
    _outputText

    createStartTestFile(nameOfClass) {
        this._outputText = "import org.junit.jupiter.api.BeforeEach;\n" +
            "import org.junit.jupiter.api.Test;\n\n" +
            "class " + nameOfClass + "Test" + " {\n"+
            "private " + nameOfClass + " " + nameOfClass + "ClassTest\n";
    }

    addTestMethod(nameOfMethod, attributes) {
        if(attributes != null){
            return `
            @Test\n
            public void ${nameOfMethod}Test(${this.addAttributesFromMethod(attributes)}) {\n
                AssertEquals() //todo
            }\n`
        }
        else {
            return `
            @Test\n
            public void ${nameOfMethod}Test() {\n
                AssertEquals() //todo
            }\n`
        }
    }

    addAttributesFromMethod(attributes) {
        let result = ``
        for(let i = 0; i < attributes.length; i++) {
            if(i+1 !== attributes.length){
                result += `${attributes[i]}, `
            }
            else {
                result += `${attributes[i]}`
            }
        }

        return result
    }



    createFinishTestFile(){
        this._outputText += "\n}\n";
    }

}