// shared-service.js
class SharedService {
    constructor() {
        this.data = {};
    }

    setData(key, value) {
        this.data[key] = value;
    }

    getData(key) {
        return this.data[key];
    }
}

export default new SharedService();
