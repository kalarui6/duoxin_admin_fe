import Request from '@src/utils/request'


const SPEAK_LIST = "/admin/speak";
// const USER_INFO_UPDATE = "/admin/user_info/update";

class Service {
    async querySpeakList(param) {
        return Request.get(SPEAK_LIST, param);
    }
}

export default Service;