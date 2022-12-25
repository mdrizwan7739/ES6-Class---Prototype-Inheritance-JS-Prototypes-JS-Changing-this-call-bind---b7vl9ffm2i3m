class API {
    #secure = false;
    constructor(url, method = 'GET') {
        this.url = url;
        this.method = 'GET';
    }
    isSecure() {
        let a = this.url.indexOf("s");
        if (a != 4) {

            return this.#secure;
        }
        else {
            this.#secure = true;
            return this.#secure;
        }
    }
    updateUrl(url) {
        this.url = url;
    }


}

module.exports = { API }
