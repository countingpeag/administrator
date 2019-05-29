import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const initialState = {
    changedPassword: false,
    willChangePassword: false,
    login: false,
    loginFailure: false,
    loginSuccess: false,
    StatisticsformData: {specialities: [], subjects:[]},
    statisticsData: {approved: null, notApproved: null, man: null, women: null, firstP: {}, secondP: {}, thirdP: {}}, 
    statisticsRequest: false,
    saveNews: false,
    fileRequest: false,
    validationStudentsData: [],
    validationOptionsData: {specialities: [], groups:[]},
    searchStudentsValidation: false,
    sentStudentsValidation: false,
    searchStudent: false,
    deleteStudent: false,
    studentInfo: {idSpeciality:{}},
    searchSubject: false,
    updateSubject: false,
    addSubject: false,
    teacherInfo: {teacherName: "", teacherLastNameFather:"", teacherLastNameMother:"", teacherRFC:"", teacherGenre:"" ,idInstitute:{instituteName:""}, specialities:[], subjects: []},
    candidatesData: [],
    updateCandidatesSelection: false
}

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    initialState,
    composeEnhencers(applyMiddleware(thunk))
);