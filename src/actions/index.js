import axios from 'axios';


//ChangePassword actions
export const CHANGED_PASSWORD = 'CHANGED_PASSWORD';
export const WILL_CHANGE_PASSWORD = 'WILL_CHANGE_PASSWORD';

export const willChangePassword = payload => ({type: WILL_CHANGE_PASSWORD, payload: payload});
const changePassword = payload => ({type: CHANGED_PASSWORD, payload:payload});

export const changedPassword = payload => {
    return dispatch => {
    
        dispatch(changePassword(true));

        axios.put(`http://localhost:8080/nucleus/admin/${localStorage.getItem('tokenAuth')}` , payload)
        .then(({data}) => {
            if(data){  
                alert("Se cambio la contraseña correctamente");
                dispatch(willChangePassword(false));
            }
            else
                alert("Intente denuevo");
        })
    };
};



//Login Actions
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const success = payload => ({type: LOGIN_SUCCESS, payload: payload});
export const failure = payload => ({type: LOGIN_FAILURE, payload: payload});
export const setLogin = payload => ({type: LOGIN, payload: payload});

//this methos is call by "Body" component
export const login = payload =>{
    return dispatch => {
        dispatch(setLogin(true));

        axios.post('http://localhost:8080/nucleus/admin/auth', {
            adminUsername: payload.adminUsername,
            adminPassword: payload.adminPassword
        })
        .then( ({data}) => {
            if(data){
                localStorage.setItem('tokenAuth', data);
                dispatch(success(true));//this set the global state named "success" to true
            }
            else{
                dispatch(failure(true));//this set the global state named "failure" to true
                dispatch(setLogin(false));
            }
        })
        .catch(error => {
            dispatch(failure(true));
            dispatch(setLogin(false));
        });
    }
}



//Statistics Actions
export const GET_STATISTIC_DATA = "GET_STATISTICS_DATA";
export const SET_STATISTIC_DATA = "SET_STATISTIC_DATA";
export const GET_DATA = "GET_DATA";

const setData = payload => ({type: GET_DATA, payload:payload});
const getStatisticData = payload => ({type: GET_STATISTIC_DATA, payload: payload});
const setStatisticData = payload => ({type: SET_STATISTIC_DATA, payload: payload});

export const statisticsData = payload => {
    return dispatch => {

        dispatch(getStatisticData(true));
        axios.post(`http://localhost:8080/nucleus/admin/statistics/${localStorage.getItem('tokenAuth')}`, payload)
        .then( ({data}) => {
            console.log(data);
            dispatch(setStatisticData(data));
            dispatch(getStatisticData(false));
        })
        .catch( error => {
            console.log(error);
            dispatch(getStatisticData(false));
        })
    };
}
export const getData = () => {
    return dispatch => {
        axios.get("http://localhost:8080/nucleus/statistics")
        .then(({data}) => {
            dispatch(setData(data));
        })
    };
}



//News/Home Actions
export const GET_NEWS = "GET_NEWS";
export const SAVE_NEWS = "SAVE_NEWS";
export const DELETE_NEWS = "DELETE_NEWS";
export const UPDATE_NEWS = "UPDATE_NEWS";

const get = payload => ({type: GET_NEWS, payload:payload});
const deletee = payload => ({type: DELETE_NEWS, payload: payload});
const update = payload => ({type: UPDATE_NEWS, payload: payload});
const save = payload => ({type: SAVE_NEWS, payload: payload});

export const getN = payload =>{
    return dispatch => {
        axios.get(`http://localhost:8080/nucleus/news/getAllNews/${localStorage.getItem('tokenAuth')}`)
        .then( ({data}) =>{
            dispatch(get(data));
        })
        .catch(error =>{
            console.log(error)
        })
    }
}
export const saveN = payload => {
    return dispatch => {
        axios.post(`http://localhost:8080/nucleus/news/add/${localStorage.getItem('tokenAuth')}`, payload, { headers: { 'Content-Type': 'application/json;charset=UTF-8' } })
        .then(({data})=>{
            dispatch(save(data));
        })
        .catch(error =>{
            console.log(error);
            dispatch(save(false));
        })
    };
}

export const deleteN = payload => {
    return dispatch => {
        
        axios.delete(`http://localhost:8080/nucleus/news/delete/${payload}/${localStorage.getItem('tokenAuth')}`)
        .then( ({data}) =>{
            dispatch(deletee(data));
      })
      .catch(error =>{
           console.log(error)
           alert('ERROR AL ELIMINAR LA NOTICIA!')
      })
    };
}

export const updateN = payload => {
    return dispatch => {
        axios.post(`http://localhost:8080/nucleus/news/update/${localStorage.getItem('tokenAuth')}`, payload, { headers: { 'Content-Type': 'application/json;charset=UTF-8' } })
        .then(({data})=>{
            dispatch(update(data));
        })
        .catch(error =>{
            console.log(error);
        })
    };
}




//File Actions
export const SAVE_FILES = "SAVE_FILES";
export const SEND_FILES = "SEND_FILES";
const saveFileRequest = payload => ({type:SEND_FILES, payload: payload})
const saveFilesResponse = payload => ({type:SAVE_FILES, payload:payload});

export const saveFilesData = payload => {
    return dispatch => {

        dispatch(saveFileRequest(true));
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };

        axios.post('http://localhost:8080/nucleus/file/upload',payload, config)
        .then( ({data}) => {

            if(data==="successful"){
                alert("El archivo se ha cargado exitosamente.");
                dispatch(saveFilesResponse(data));
            }
            else{
                alert("El archivo no se pudo cargar, Intente de nuevo.");
                dispatch(saveFilesResponse(data));
            }

            dispatch(saveFileRequest(false));
        })  
        .catch(error => {
            console.log(error);
            alert("El archivo no se pudo cargar, Intente de nuevo.");
            dispatch(saveFileRequest(false));
        });
    };
}



//Valdation Actions
export const GET_FORMOPTIONS_DATA = "GET_FORMOPTIONS_DATA";
export const GET_STUDENTS_VALIDATION = "GET_STUDENTS_VALIDATION";
export const SET_STUDENTS_VALIDATION = "SET_STUDENTS_VALIDATION";
export const SEARCH_STUDENTS_VALIDATION = "SEARCH_STUDENTS_VALIDATION";

const studentsData = payload => ({type:GET_STUDENTS_VALIDATION, payload:payload});
const searchStudents = payload => ({type:SEARCH_STUDENTS_VALIDATION, payload:payload});
const setStudentsData = payload => ({type:SET_STUDENTS_VALIDATION, payload:payload});
const formOptions = payload => ({type:GET_FORMOPTIONS_DATA, payload:payload});

export const getFormData = () => {
    return dispatch => {

        axios.get(`http://localhost:8080/nucleus/admin/${localStorage.getItem('tokenAuth')}`)
        .then( ({data}) => {
            dispatch(formOptions(data));
        })

    };
};

export const getStudentData = payload => {
    return dispatch => {

        dispatch(searchStudents(true));
        axios.post(`http://localhost:8080/nucleus/admin/students/${localStorage.getItem("tokenAuth")}`, payload)
        .then( ({data}) => {
            dispatch(studentsData(data));
            dispatch(searchStudents(false));
        })
        .catch(error => {
            dispatch(searchStudents(false));
        });
    };
};

export const sendStudentsValidation = payload => {
    return dispatch => {
        axios.post(`http://localhost:8080/nucleus/admin/validation/${localStorage.getItem("tokenAuth")}`, payload)
        .then( ({data}) => {
            if(data){
                alert("Se guardo correctamente");
                dispatch(setStudentsData(data));
            }
        })
        .catch( error => {
            alert("Upps!! Algo salio mal. Intente mas tarde.");
        });
    };
};


//Students actions
export const SEARCH_STUDENT = "SEARCH_STUDENT";
export const STUDENT_INFO = "STUDENT_INFO";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const DELETE_RESPONSE = "DELETE_RESPONSE";

const searchStudent = payload => ({type: SEARCH_STUDENT, payload:payload});
const studentInfo = payload => ({type: STUDENT_INFO, payload:payload});
const deleteStudent = payload => ({type: DELETE_STUDENT, payload:payload});
const deleteResponse =  payload => ({type: DELETE_RESPONSE, payload:payload});

export const getTuition = payload => {
    return dispatch => {
        dispatch(searchStudent(true));

        axios.post(`http://localhost:8080/nucleus/admin/getStudent/${localStorage.getItem("tokenAuth")}`, payload)
        .then( ({data}) => {
            if(data!=="")
                dispatch(studentInfo(data));
            else
                alert(`El estudiante con matricula: ${payload.tuition} no se encontro.`);

            dispatch(searchStudent(false));
        })
        .catch( error => {
            alert("Hubo un problema al buscar el estudiante. Intente mas tarde");
            dispatch(searchStudent(false));
        });
    };
};

export const deleteStud = payload => {
    return dispatch => {
        dispatch(deleteStudent(true));
        console.log(payload);
        axios.post(`http://localhost:8080/nucleus/admin/deleteStudent/${localStorage.getItem("tokenAuth")}`, payload)
        .then( ({data}) => {
            if(data)
                alert(`El estudiante con matricula ${payload.studentTuition} se ha eliminado correctamente.`);
            dispatch(deleteResponse(data));
            dispatch(deleteStudent(false));
        })
        .catch( error => {
            alert("Hubo un problema al remover el estudiante. Intente mas tarde.");
            dispatch(deleteStudent(false));
        });
        
    };
};


//Subjects Actions
export const SEARCH_SUBJECT = "SEARCH_SUBJECT";
export const SUBJECT_INFO = "SUBJECT_INFO";
export const UPDATE_SUBJECT = "UPDATE_SUBJECT";
export const UPDATE_SUBJECT_RESPONSE = "UPDATE_SUBJECT_RESPONSE";
export const ADD_SUBJECT = "ADD_SUBJECT";
export const ADD_SUBJECT_RESPONSE = "ADD_SUBJECT_RESPONSE";

const searchSubject = payload => ({type: SEARCH_SUBJECT, payload:payload});
const subjectInfo = payload => ({type: SUBJECT_INFO, payload:payload});
const updateSubject1 = payload => ({type: UPDATE_SUBJECT, payload:payload});
const updateSubjectResponse =  payload => ({type: UPDATE_SUBJECT_RESPONSE, payload:payload});
const addSubjects = payload => ({type: ADD_SUBJECT, payload:payload});
const addSubjectResponse = payload => ({type: ADD_SUBJECT_RESPONSE, payload:payload});

export const findSubject = payload => {
    return dispatch => {
        dispatch(searchSubject(true));
        
        axios.post(`http://localhost:8080/nucleus/admin/getSubject/${localStorage.getItem("tokenAuth")}`, payload, {headers: {'content-type': 'text/plain'}})
        .then( ({data}) => {
            if(data==="")
                alert(`La materia ${payload} no se encontro.`);
            else
                dispatch(subjectInfo(data));
            
            dispatch(searchSubject(false));
        })
        .catch( error => {
            console.log(error);
            dispatch(searchSubject(false));
            dispatch(subjectInfo(true));
        })
    };
};

export const updateSubject = payload => {
    return dispatch => {
        dispatch(updateSubject1(true));
        axios.put(`http://localhost:8080/nucleus/admin/updateSubject/${localStorage.getItem("tokenAuth")}`, payload)
        .then( ({data}) => {
            if(data)
                alert("La materia se actualizo correctamente.");
            dispatch(updateSubjectResponse(data));
            dispatch(updateSubject1(false));
        })
        .catch( error => {
            alert("Hubo un problema al actualizar la maeria. Intente mas tarde.");
            dispatch(updateSubject1(false));
        })
    };
};

export const addSubject = payload => {
    return dispatch => {
        dispatch(addSubjects(true));
        axios.post(`http://localhost:8080/nucleus/admin/addSubject/${localStorage.getItem("tokenAuth")}`, payload)
        .then( ({data}) => {
            dispatch(addSubjectResponse(data));
            dispatch(addSubjects(false));
        })
        .catch( error => {
            dispatch(addSubjects(false));
        });
    };
};



//Teacher Actions
export const SEARCH_TEACHER_NAME = "SEARCH_TEACHER_NAME";
export const UPDATE_TEACHER_DATA = "UPDATE_TEACHER_DATA";
export const UPDATE_TEACHER_REQUEST = "UPDATE_TEACHER_REQUEST";
export const SAVE_TEACHER = "SAVE_TEACHER";
export const SAVE_TEACHER_REQUEST = "SAVE_TEACHER_REQUEST";
export const SEARCH_TEACHER_REQUEST = "SEARCH_TEACHER_REQUEST";

const searchByName = payload => ({type: SEARCH_TEACHER_NAME, payload: payload});
const updateTeacher = payload => ({type: UPDATE_TEACHER_DATA, payload:payload});
const updateTeacherRequest = payload => ({type: UPDATE_TEACHER_REQUEST, payload:payload});
const saveTeacher = payload => ({type: SAVE_TEACHER, payload:payload});
const saveTeacherRequest = payload => ({type: SAVE_TEACHER_REQUEST, payload:payload});
const searchTeacherRequest = payload => ({type: SEARCH_TEACHER_REQUEST, payload:payload});

export const searchTeacherInfo = payload => {
    return dispatch => {
        dispatch(searchTeacherRequest(true));
        axios.get(`http://localhost:8080/nucleus/teacher/getTeacher/${payload}/${localStorage.getItem("tokenAuth")}`)
        .then( ({data}) => {
            if(data!=="")
                dispatch(searchByName(data));
            else{
                dispatch(searchTeacherRequest(false));
                alert(`El profesor ${payload} no se encontro.`);
            }
        })
        .catch( error => {
            console.log(error);
            alert(`Hubo un problema en la busqueda, Intente mas tarde.`);
            dispatch(searchTeacherRequest(false));
        })
    };
};

export const updateTecher = payload => {
    return dispatch => {
        dispatch(updateTeacherRequest(true));
        axios.put(`http://localhost:8080/nucleus/teacher/saveorupdateTeacher/${localStorage.getItem("tokenAuth")}`, payload)
        .then( ({data}) => {
            if(data===true)
                alert("La informacion del profesor se actualizo correctamente!");
            else if(data===false)
                alert("Hubo un problema al actualizar la informacion, intente mas tarde!");
            
            dispatch(updateTeacher(data));
            dispatch(updateTeacherRequest(false));
        })
        .catch( error => {
            console.log(error);
            alert("Hubo un problema al actualizar la informacion, intente mas tarde!");
            dispatch(updateTeacher(false));
            dispatch(updateTeacherRequest(false));
        });
    };
};

export const saveTecher = payload => {
    return dispatch => {
        dispatch(saveTeacherRequest(true));
        axios.put(`http://localhost:8080/nucleus/teacher/saveorupdateTeacher/${localStorage.getItem("tokenAuth")}`, payload)
        .then( ({data}) => {
            if(data===true)
                alert(`El profesor ${payload.teacherName} se guardo correctamente!`);
            else if(data===false)
                alert("Hubo un problema al guardar la informacion, intente mas tarde!");
            
            dispatch(saveTeacher(data));
            dispatch(saveTeacherRequest(false));
        })
        .catch( error => {
            console.log(error);
            alert("Hubo un problema al guardar la informacion, intente mas tarde!");
            dispatch(saveTeacher(false));
            dispatch(saveTeacherRequest(false));
        });
    };
};


//Candidates actions
export const GET_CANDIDATES_SELECTED = "GET_CANDIDATES_SELECTED";
export const GET_CANDIDATES_SELECTED_REQUEST = "GET_CANDIDATES_SELECTED_REQUEST";
export const GET_CANDIDATES = "GET_CANDIDATES";
export const UPDATE_CANDIDATE_SELECTION = "UPDATE_CANDIDATE_SELECTION";

const candidates = payload => ({type:GET_CANDIDATES, payload:payload});
const candidateSelection = payload => ({type:GET_CANDIDATES_SELECTED, payload:payload});
const candidateSelectionRequest = payload => ({type:GET_CANDIDATES_SELECTED_REQUEST, payload:payload});
const updateSelection = payload => ({type:UPDATE_CANDIDATE_SELECTION, payload:payload});

export const getCandidates = payload => {
    return dispatch => {
        axios.get(`http://localhost:8080/nucleus/candidates/retrieve/${localStorage.getItem("tokenAuth")}`)
        .then( ({data}) => {
            dispatch(candidates(data));
        })
        .catch( error => {
            console.log(error);
        });

    };
};

export const getCandidateSelection = payload => {
    return dispatch => {
        dispatch(candidateSelectionRequest(true));
        axios.get(`http://localhost:8080/nucleus/candidates/candidatesSelection/${localStorage.getItem("tokenAuth")}`)
        .then( ({data}) => {
            dispatch(candidateSelection(data));
            dispatch(candidateSelectionRequest(false));
        })
        .catch( error => {
            console.log(error);
            dispatch(candidateSelectionRequest(false));
        });
    };
};

export const updateCandidatesSelected = payload => {
    return dispatch => {
        dispatch(candidateSelection(payload));
    };
};

export const updateCandidateSelection = payload => {
    return dispatch => {
        dispatch(updateSelection(true));
        axios.post(`http://localhost:8080/nucleus/candidates/updateCandidateSelection/${localStorage.getItem("tokenAuth")}`, payload)
        .then( ({data}) => {
            dispatch(updateSelection(!data));
        })
        .catch( error => {
            console.log(error);
            dispatch(updateSelection(false));
        })
    };
};

