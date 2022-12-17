const initialState = {
    roleList: [] || '',
    userList: [] || '',
    courseGroupList: [] || '',
    userCourseGroup: [] || '',
    userGet: {},
    isLoggedIn: "",
    isReset: ""

};
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LIST':
            return {
                ...state,
                userList: action.payload
            };

        case 'USER_GET':
            return {
                ...state,
                userGet: action.payload
            };
        case 'USERS_BY_COURSE_GROUPS':
            return {
                ...state,
                userCourseGroup: action.payload
            };

        case 'ROLE_LIST':
            return {
                ...state,
                roleList: action.payload
            };

        case 'COURSE_GROUP_LIST':
            return {
                ...state,
                courseGroupList: action.payload
            };

        case 'FORGOT_PASS': return {
            isReset: action.isReset,
            message: action.payload
        }

        case 'LOGIN_USER': return {
            isLoggedIn: action.isLoggedIn,
            message: action.payload
        }


        default:
            return state;
    }
};
export default UserReducer;