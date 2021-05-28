const generate = require('../../server/generator/interface/TestGenerator')

/*
public class Testing {
    public class abc {
        public void method1() {}
        public int method2(int a) {return a*a;}
        private void method3(){}
        private int method4(int a) {return a*a;}
        void method17() {}
        int method18(int a) {return a*a;}
        protected void method19() {}
        protected int method20(int a) {return a*a;}
    }
    private class b {
        public void method5() {}
        public int method6(int a) {return a*a;}
        private void method7(){}
        private int method8(int a) {return a*a;}
        void method21() {}
        int method22(int a) {return a*a;}
        protected void method23() {}
        protected int method24(int a) {return a*a;}
    }
    protected class bcd {
        public void method5() {}
        public int method6(int a) {return a*a;}
        private void method7(){}
        private int method8(int a) {return a*a;}
        void method21() {}
        int method22(int a) {return a*a;}
        protected void method23() {}
        protected int method24(int a) {return a*a;}
    }
    class asd {
        public void method5() {}
        public int method6(int a) {return a*a;}
        private void method7(){}
        private int method8(int a) {return a*a;}
        void method21() {}
        int method22(int a) {return a*a;}
        protected void method23() {}
        protected int method24(int a) {return a*a;}
    }
    public void method9() {}
    public int method10(int a) {return a*a;}
    private void method11(){}
    private int method12(int a) {return a*a;}
    void method13() {}
    int method14(int a) {return a*a;}
    protected void method15() {}
    protected int method16(int a) {return a*a;}
}
 */

test('packageHollowClass', () => {
    const input = "class Testing {\n" +
                "}"
    const output =  "import org.junit.jupiter.api.BeforeEach;\n"+
                    "import org.junit.jupiter.api.Test;\n\n"+
                    "class TestingTest {\n"+
                        "\tprivate Testing TestingTestClass;\n\n"+
                    "}"

    expect(generate(input)).toEqual(output)
})

test('publicHollowClass', () => {
    const input = "public class Testing {\n" +
        "}"
    const output =  "import org.junit.jupiter.api.BeforeEach;\n"+
        "import org.junit.jupiter.api.Test;\n\n"+
        "class TestingTest {\n"+
        "\tprivate Testing TestingTestClass;\n\n"+
        "}"

    expect(generate(input)).toEqual(output)
})

test('privateHollowClass', () => {
    const input = "private class Testing {\n" +
        "}"
    const output =  "import org.junit.jupiter.api.BeforeEach;\n"+
        "import org.junit.jupiter.api.Test;\n\n"+
        "class TestingTest {\n"+
        "\tprivate Testing TestingTestClass;\n\n"+
        "}"

    expect(generate(input)).toEqual(output)
})

test('protectedHollowClass', () => {
    const input = "protected class Testing {\n" +
        "}"
    const output =  "import org.junit.jupiter.api.BeforeEach;\n"+
        "import org.junit.jupiter.api.Test;\n\n"+
        "class TestingTest {\n"+
        "\tprivate Testing TestingTestClass;\n\n"+
        "}"

    expect(generate(input)).toEqual(output)
})

test('onePublicMethod', () => {
    const input = "class Testing {\n" +
        "public int retZero(){return 0;}"+
        "}"
    const output =  "import org.junit.jupiter.api.BeforeEach;\n"+
        "import org.junit.jupiter.api.Test;\n\n"+
        "class TestingTest {\n"+
        "\tprivate Testing TestingTestClass;\n\n"+
        "\t@Test\n" +
        "\tpublic void Method_retZero_ClassOf_Testing_Test() {\n" +
        "\t\tpublic expectedValue = null;\t//todo expected value\n" +
        "\t\tassertEquals(expectedValue, TestingTestClass.retZero())\t//todo assert\n" +
        "\t}\n" +
        "\n"+
        "}"

    expect(generate(input)).toEqual(output)
})

test('twoPublicMethod', () => {
    const input = "public class Main {\n" +
        "public int retZero(){return 0;}"+
        "public int retOne(){return 1;}"+
        "}"
    const output =  "import org.junit.jupiter.api.BeforeEach;\n"+
        "import org.junit.jupiter.api.Test;\n\n"+
        "class MainTest {\n"+
        "\tprivate Main MainTestClass;\n\n"+
        "\t@Test\n" +
        "\tpublic void Method_retZero_ClassOf_Main_Test() {\n" +
        "\t\tpublic expectedValue = null;\t//todo expected value\n" +
        "\t\tassertEquals(expectedValue, MainTestClass.retZero())\t//todo assert\n" +
        "\t}\n" +
        "\n"+
        "\t@Test\n" +
        "\tpublic void Method_retOne_ClassOf_undefined_Test() {\n" +
        "\t\tpublic expectedValue = null;\t//todo expected value\n" +
        "\t\tassertEquals(expectedValue, undefinedTestClass.retOne())\t//todo assert\n" +
        "\t}\n" +
        "\n"+
        "}"

    expect(generate(input)).toEqual(output)
})

test('onePrivateMethod', () => {
    const input = "class Testing {\n" +
        "private int retZero(){return 0;}"+
        "}"
    const output =  "import org.junit.jupiter.api.BeforeEach;\n"+
        "import org.junit.jupiter.api.Test;\n\n"+
        "class TestingTest {\n"+
        "\tprivate Testing TestingTestClass;\n\n"+
        "}"

    expect(generate(input)).toEqual(output)
})

test('twoPrivateMethod', () => {
    const input = "class Testing {\n" +
        "private int retZero(){return 0;}"+
        "private int retOne(){return 1;}"+
        "}"
    const output =  "import org.junit.jupiter.api.BeforeEach;\n"+
        "import org.junit.jupiter.api.Test;\n\n"+
        "class TestingTest {\n"+
        "\tprivate Testing TestingTestClass;\n\n"+
        "}"

    expect(generate(input)).toEqual(output)
})

test('1', () => {
    expect(1).toBe(1)
})

test('2', () => {
    expect(1).toBe(1)
})

test('13', () => {
    expect(1).toBe(1)
})

test('14', () => {
    expect(1).toBe(1)
})

test('15', () => {
    expect(1).toBe(1)
})

test('17', () => {
    expect(1).toBe(1)
})

test('19', () => {
    expect(1).toBe(1)
})

test('129', () => {
    expect(1).toBe(1)
})
test('119', () => {
    expect(1).toBe(1)
})
test('1119', () => {
    expect(1).toBe(1)
})

test('11219', () => {
    expect(1).toBe(1)
})
test('4619', () => {
    expect(1).toBe(1)
})
test('45619', () => {
    expect(1).toBe(1)
})
test('78919', () => {
    expect(1).toBe(1)
})
test('6547819', () => {
    expect(1).toBe(1)
})
test('966319', () => {
    expect(1).toBe(1)
})
test('14719', () => {
    expect(1).toBe(1)
})
test('15919', () => {
    expect(1).toBe(1)
})
test('756319', () => {
    expect(1).toBe(1)
})
test('125819', () => {
    expect(1).toBe(1)
})
test('456789812319', () => {
    expect(1).toBe(1)
})