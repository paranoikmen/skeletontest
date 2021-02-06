
class javaParse {
    _inputText;
    _outputText;

    javaParse(text){
        this._inputText = text;
    }

    setInputText(text){
        this._inputText = text;
    }

    getInputText(){
        return this._inputText;
    }

    getOutputText() {
        return this._outputText;
    }

    parse(){
        let initclass = this.findInitClass();
        let methods = []
        let tmp
        for(let i = 0; i < this._inputText.length; i++) { //записывет все найденныые методы в массив
            tmp = this.findMethod(i)
            if(tmp.indexOfSubstr !== -1){
                methods.push(tmp.outString)
                i = tmp.indexOfSubstr-1
            }
        }

    }

    findInitClass(index = 0) {
        const initClass = new RegExp("class\\s+[\\w\\s]+{?[^;]", "m");  //поиск инициализации класса
        return {
            outString: initClass.exec(this._inputText),
            indexOfSubstr: this._inputText.indexOf(initClass.exec(this._inputText))
            //todo возвращать имя класса
        }
    }

    findClassName(initClass) {
        const className = new RegExp("\\w+")
        return initClass.slice(initClass.lastIndex(className))
    }

    findMethod(index = 0, lastIndex = this._inputText.length) {
        const method = new RegExp("public\\s+\\w+\\s*\\([\\w\\s,@]*\\)\\s*{?", "m");
        return {
            outString: method.exec(this._inputText.slice(index, lastIndex)),
            indexOfSubstr: this._inputText.indexOf(method.exec(this._inputText.slice(index, lastIndex)))
            //todo возвращать имя метода
        }
    }

    findMethodName(method) {
        const methodName = new RegExp("\\w+\\s*\\(")
        return method.slice(method.indexOf(methodName))
    }

}