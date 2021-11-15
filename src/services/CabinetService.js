import axios from 'axios';

const CABINET_API_BASE_URL = "https://back-for-uni.herokuapp.com";


class CabinetService {
    config = { headers: {"Authorization" : `Bearer ${localStorage.user}`} }

    getCabinet(){
        return axios.get(CABINET_API_BASE_URL, this.config);
    }

    createCabinet(cabinet){
        return axios.post(CABINET_API_BASE_URL + '/cabinet/add', cabinet, this.config);
    }

    getCabinetById(cabinetId){
        return axios.get(CABINET_API_BASE_URL + `/cabinet/get-by-id/${cabinetId}`, this.config);
    }

    updateCabinet(cabinet, cabinetId){
        return axios.put(CABINET_API_BASE_URL + `/cabinet/edit/${cabinetId}`, cabinet, this.config);
    }

    deleteCabinet(cabinetId){
        return axios.delete(CABINET_API_BASE_URL + `/cabinet/delete/${cabinetId}`, this.config);
    }
}

export default new CabinetService() 
