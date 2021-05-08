const antlr4 = require('antlr4');
const JavaLexer = require('../parser/Java9Lexer');
const JavaParser = require('../parser/Java9Parser');
const JavaVisitor = require( "../parser/Java9Visitor");

function parser(inputText) {

    function createStartTestFile(stackClass){
        let result = ""
        result += "import org.junit.jupiter.api.BeforeEach;\n" +
            "import org.junit.jupiter.api.Test;\n\n" +
            "class" + " " + stackClass[0].nameOfClass + "Test" + " {\n"+
            addTestClasses(stackClass);
        return result
    }

    function addTestClasses(stackClass) {
        let result = ""
        for(let i = 0; i<stackClass.length; i++) {
            result += "\t" + "private " + stackClass[i].nameOfClass + " " + stackClass[i].nameOfClass + "TestClass;\n"
        }
        return result
    }

    function addMethodTest(stackMethods, stackAttributes) {
        let result = ""
        let arrAttributes = []
        for(let i = 0; i<stackMethods.length; i++) {
            if(stackMethods[i].modifierOfMethod !== "private") {
                for(let j = 0; j<stackAttributes.length; j++) {
                    if(stackMethods[i].nameOfMethod === stackAttributes[j].methodName) {
                        arrAttributes.push(stackAttributes[j])
                    }
                }
                result += createMethodTest(stackMethods[i], arrAttributes)
                arrAttributes = []
            }
        }
        return result
    }

    function createMethodTest(method, attributesMethod){
        let result = ""
        result += "\n\t@Test\n" +
            "\tpublic void " + "Method_" + method.nameOfMethod + "_ClassOf_" + method.className + "_Test() {\n" +
            createAttributesForTest(attributesMethod) +
            "\t\t" + method.modifierOfMethod + " expectedValue = null;\t//todo expected value\n" +
            "\t\tassertEquals(expectedValue, " + method.className + "TestClass." + method.nameOfMethod + "("+ createAttributesForAssert(attributesMethod) +")" + ")" + "\t//todo assert" +
            "\n\t}\n"
        return result
    }

    function createAttributesForTest(attributes) {
        let result = ""
        for(let i = 0; i<attributes.length; i++) {
            result += "\t\t" + attributes[i].typeOfAttributes + " " + attributes[i].nameOfAttributes + " = null;\t//todo change null\n"
        }
        return result
    }

    function createAttributesForAssert(attributes) {
        let result = ""
        for(let i = 0; i < attributes.length; i++) {
            if(i+1 !== attributes.length){
                result += attributes[i].typeOfAttributes + " " + attributes[i].nameOfAttributes + ","
            }
            else {
                result += attributes[i].typeOfAttributes + " " + attributes[i].nameOfAttributes
            }
        }
        return result
    }

    function createFinishTestFile(){
        return "\n}";
    }

    function generateTestSkeleton() {
        let chars = new antlr4.InputStream(inputText)
        let lexer = new JavaLexer(chars)
        let tokens = new antlr4.CommonTokenStream(lexer)
        let parser = new JavaParser(tokens)

        parser.buildParseTrees = true;

        let javaVis = new JavaVisitor()
        let tree = parser.block();
        tree.accept(javaVis)

        let tmp = ""
        tmp += createStartTestFile(javaVis.classes)
        tmp += addMethodTest(javaVis.methods, javaVis.attributes)
        tmp += createFinishTestFile()

        return tmp
    }

    return generateTestSkeleton()
}

module.exports = parser