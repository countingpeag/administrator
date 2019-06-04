import React, { Component } from "react";
import ReactExport from "react-export-excel";
import CustomButton from '../../Util/CustomButton';
import green from '@material-ui/core/colors/green';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class DownloadCandidates extends Component {

    constructor(){
        super();
        this.state = {
            data: []
        };        
    }
    componentWillReceiveProps(props){
        let dataModified = props.data.map( candidate => {
            return {
                candidateName: candidate.candidateName,
                candidateLastNameFather: candidate.candidateLastNameFather,
                candidateLastNameMother: candidate.candidateLastNameMother,
                candidateBirthDate: new Date(candidate.candidateBirthDate),
                candidateCivilStatus: candidate.candidateCivilStatus,
                candidateGenre: candidate.candidateGenre,
                candidateAge: candidate.candidateAge,
                candidateMunicipalityBorn: candidate.candidateMunicipalityBorn,
                candidateLocalityBorn: candidate.candidateLocalityBorn,
                candidateStateBorn: candidate.candidateStateBorn,
                candidateCurrentStreet: candidate.candidateCurrentStreet,
                candidateCurrentHouseNumber: candidate.candidateCurrentHouseNumber,
                candidateNeighborhood: candidate.candidateNeighborhood,
                candidateCurrentZipCode: candidate.candidateCurrentZipCode,
                candidateCurrentMunicipality: candidate.candidateCurrentMunicipality,
                candidateCurrentLocality: candidate.candidateCurrentLocality,
                candidateCurrentState: candidate.candidateCurrentState,
                candidateCellPhone: candidate.candidateCellPhone,
                candidatePersonalPhone: candidate.candidatePersonalPhone,
                candidateEmail: candidate.candidateEmail,
                candidateFatherName: candidate.candidateFatherName,
                candidateMotherName: candidate.candidateMotherName,
                candidateMotherOccupation: candidate.candidateMotherOccupation,
                candidateFatherOccupation: candidate.candidateFatherOccupation,
                candidateMotherPhone: candidate.candidateMotherPhone,
                candidateFatherPhone: candidate.candidateFatherPhone,
                candidateMiddleSchool: candidate.candidateMiddleSchool,
                candidateMunicipalitySchool: candidate.candidateMunicipalitySchool,
                candidateStateSchool: candidate.candidateStateSchool,
                candidateSchoolType: candidate.candidateSchoolType,
                candidateSchoolRegime: candidate.candidateSchoolRegime,
                candidateSchoolKey: candidate.candidateSchoolKey,
                candidateEndDate: new Date(candidate.candidateEndDate),
        
                insuranceNumber: candidate.health.insuranceNumber,
                healthCandidateHeight: candidate.health.healthCandidateHeight,
                healthCandidateWeight: candidate.health.healthCandidateWeight,
                healthCandidateBloodType: candidate.health.healthCandidateBloodType,
                healthIllnessFlag: candidate.health.healthIllnessFlag==='1'?"Si":"No",
                healthDisability: candidate.health.healthDisability==='1'?"Si":"No",
                healthGlassesFlag: candidate.health.healthGlassesFlag==='1'?"Si":"No",
                healthSmokingFlag: candidate.health.healthSmokingFlag==='1'?"Si":"No",
                healthLaterality: candidate.health.healthLaterality,
        
                preferencesScholarshipFlag: candidate.preference.preferencesScholarshipFlag==='1'?"Si":"No",
                preferencesShiftWished: candidate.preference.preferencesShiftWished,
                preferencesWayToKnow: candidate.preference.preferencesWayToKnow,
                preferencesSpecialtyWhished1: candidate.preference.preferencesSpecialtyWhished1,
                preferencesSpecialtyWhished2: candidate.preference.preferencesSpecialtyWhished2,
                preferencesSpecialtyWhished3: candidate.preference.preferencesSpecialtyWhished3,
                preferencesSpecialtyWhished4: candidate.preference.preferencesSpecialtyWhished4,
        
                finalScore: candidate.candidateScore
            };
        }); 

        this.setState({data:dataModified});
    }  

    render() {
        const { data } = this.state;
        return (
            <ExcelFile element={<CustomButton value={"XML Aspirantes"} color={green} />}>
                <ExcelSheet data={data} name="Aspirantes">
                    <ExcelColumn label="Nombre" value="candidateName"/>
                    <ExcelColumn label="Apellido Paterno" value="candidateLastNameFather"/>
                    <ExcelColumn label="Apellido Materno" value="candidateLastNameMother"/>
                    <ExcelColumn label="Fecha de nacimiento" value="candidateBirthDate"/>
                    <ExcelColumn label="Estado Civil" value="candidateCivilStatus"/>
                    <ExcelColumn label="Sexo" value="candidateGenre"/>
                    <ExcelColumn label="Edad" value="candidateAge"/>
                    <ExcelColumn label="Municipio de nacimiento" value="candidateMunicipalityBorn"/>
                    <ExcelColumn label="Localidad de nacimiento" value="candidateLocalityBorn"/>
                    <ExcelColumn label="Estado de nacimiento" value="candidateStateBorn"/>
                    <ExcelColumn label="Calle" value="candidateCurrentStreet"/>
                    <ExcelColumn label="Numero de casa" value="candidateCurrentHouseNumber"/>
                    <ExcelColumn label="Colonia" value="candidateNeighborhood"/>
                    <ExcelColumn label="Codigo postal" value="candidateCurrentZipCode"/>
                    <ExcelColumn label="Municipio actual" value="candidateCurrentMunicipality"/>
                    <ExcelColumn label="Localidad actual" value="candidateCurrentLocality"/>
                    <ExcelColumn label="Estado actual" value="candidateCurrentState"/>
                    <ExcelColumn label="Celular" value="candidateCellPhone"/>
                    <ExcelColumn label="Telefono personal" value="candidatePersonalPhone"/>
                    <ExcelColumn label="Correo electronico" value="candidateEmail"/>
                    <ExcelColumn label="Nombre del padre" value="candidateFatherName"/>
                    <ExcelColumn label="Nombre de la madre" value="candidateMotherName"/>
                    <ExcelColumn label="Ocupacion de la madre" value="candidateMotherOccupation"/>
                    <ExcelColumn label="Ocupacion del padre" value="candidateFatherOccupation"/>
                    <ExcelColumn label="Telefono de la madre" value="candidateMotherPhone"/>
                    <ExcelColumn label="Telefono del padre" value="candidateFatherPhone"/>
                    <ExcelColumn label="Secundaria" value="candidateMiddleSchool"/>
                    <ExcelColumn label="Municipio de la secundaria" value="candidateMunicipalitySchool"/>
                    <ExcelColumn label="Estado de la secundaria" value="candidateStateSchool"/>
                    <ExcelColumn label="Tipo de secundaria" value="candidateSchoolType"/>
                    <ExcelColumn label="Regimen de la secundaria" value="candidateSchoolRegime"/>
                    <ExcelColumn label="Clade de secundaria" value="candidateSchoolKey"/>
                    <ExcelColumn label="Fecha de termino secundaria" value="candidateEndDate"/>

                    <ExcelColumn label="Numero de seguro social" value="insuranceNumber"/>
                    <ExcelColumn label="Altura" value="healthCandidateHeight"/>
                    <ExcelColumn label="Peso" value="healthCandidateWeight"/>
                    <ExcelColumn label="Tipo de sangre" value="healthCandidateBloodType"/>
                    <ExcelColumn label="Enfermedad" value="healthIllnessFlag"/>
                    <ExcelColumn label="Discapacidad" value="healthDisability"/>
                    <ExcelColumn label="Lentes" value="healthGlassesFlag"/>
                    <ExcelColumn label="Fuma" value="healthSmokingFlag"/>
                    <ExcelColumn label="Lateralidad" value="healthLaterality"/>


                    <ExcelColumn label="Beca" value="preferencesScholarshipFlag"/>
                    <ExcelColumn label="Turno de preferencia" value="preferencesShiftWished"/>
                    <ExcelColumn label="Como se entero" value="preferencesWayToKnow"/>
                    <ExcelColumn label="Especialidad 1" value="preferencesSpecialtyWhished1"/>
                    <ExcelColumn label="Especialidad 2" value="preferencesSpecialtyWhished2"/>
                    <ExcelColumn label="Especialidad 3" value="preferencesSpecialtyWhished3"/>
                    <ExcelColumn label="Especialidad 4" value="preferencesSpecialtyWhished4"/>

                    <ExcelColumn label="Calificacion Examen" value="finalScore"/>
                </ExcelSheet>
            </ExcelFile>
        );
    }
}

export default DownloadCandidates;