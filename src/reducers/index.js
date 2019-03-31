import { combineReducers } from 'redux';
import { changedPassword, willChangePassword } from './changedPassword';
import { login, loginSuccess, loginFailure } from './login';
import { statisticsData, statisticsRequest } from './statistics';
import { StatisticsformData } from './formOptions';
import { getNews, saveNews, deleteNews, updateNews } from './news';
import { fileResponse, fileRequest } from './Files';
import { validationStudentsData, validationOptionsData, sentStudentsValidation, searchStudentsValidation} from './Validation';
import { searchStudent, studentInfo, deleteStudent, deleteResponse } from './Students';
import { searchSubject, subjectInfo, updateSubject, updateSubjectResponse, addSubject, addSubjectResponse } from './Subjects';
import { teacherInfo, updateTeacher } from './TeacherReducer';

export default combineReducers({
    changedPassword,
    willChangePassword,
    login,
    loginFailure,
    loginSuccess,
    StatisticsformData,
    statisticsData,
    statisticsRequest,
    getNews,
    saveNews,
    updateNews,
    deleteNews,
    fileRequest,
    fileResponse,
    validationOptionsData,
    validationStudentsData,
    searchStudentsValidation,
    sentStudentsValidation,
    searchStudent,
    studentInfo, 
    deleteStudent,
    deleteResponse,
    searchSubject,
    subjectInfo,
    updateSubject,
    updateSubjectResponse,
    addSubject,
    addSubjectResponse,
    teacherInfo,
    updateTeacher
}); 