import React, { Component } from "react";
import ReactExport from "react-export-excel";
import Button from '@material-ui/core/Button';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

//This is Test Data
const dataSet1 = [
    {
        candidateName: "Josef",
        candidateLastNameFather: 450500,
        candidateLastNameMother: 'M',
        candidateBirthDate: true,
        candidateCivilStatus: 'M',
        candidateGenre: 'M',
        candidateAge: 'M',
        candidateMunicipalityBorn: 'M',
        candidateLocalityBorn: 'M',
        candidateStateBorn: 'M',
        candidateCurrentStreet: 'M',
        candidateCurrentHouseNumber: 'M',
        candidateNeighborhood: 'M',
        candidateCurrentZipCode: '54060',
        candidateCurrentMunicipality: 'M',
        candidateCurrentLocality: 'M',
        candidateCurrentState: 'M',
        candidateCellPhone: 'M',
        candidatePersonalPhone: 'M',
        candidateEmail: 'M',
        candidateFatherName: 'M',
        candidateMotherName: 'M',
        candidateMotherOccupation: 'M',
        candidateFatherOccupation: 'M',
        candidateMotherPhone: 'M',
        candidateFatherPhone: 'M',
        candidateMiddleSchool: 'M',
        candidateMunicipalitySchool: 'M',
        candidateStateSchool: 'M',
        candidateSchoolType: 'M',
        candidateSchoolRegime: 'M',
        candidateSchoolKey: 'M',
        candidateEndDate: 'M',

        insuranceNumber: 'M',
        healthCandidateHeight: 'M',
        healthCandidateWeight: 'M',
        healthCandidateBloodType: 'M',
        healthIllnessFlag: 'M',
        healthDisability: 'M',
        healthGlassesFlag: 'M',
        healthSmokingFlag: 'M',
        healthLaterality: 'M',

        preferencesScholarshipFlag: 'M',
        preferencesShiftWished: 'M',
        preferencesWayToKnow: 'M',
        preferencesSpecialtyWhished1: 'M',
        preferencesSpecialtyWhished2: 'M',
        preferencesSpecialtyWhished3: 'M',
        preferencesSpecialtyWhished4: 'M',

        finalScore: 'M'
    },
    {
        candidateName: "Josef",
        candidateLastNameFather: 450500,
        candidateLastNameMother: 'M',
        candidateBirthDate: true,
        candidateCivilStatus: 'M',
        candidateGenre: 'M',
        candidateAge: 'M',
        candidateMunicipalityBorn: 'M',
        candidateLocalityBorn: 'M',
        candidateStateBorn: 'M',
        candidateCurrentStreet: 'M',
        candidateCurrentHouseNumber: 'M',
        candidateNeighborhood: 'M',
        candidateCurrentZipCode: '54060',
        candidateCurrentMunicipality: 'M',
        candidateCurrentLocality: 'M',
        candidateCurrentState: 'M',
        candidateCellPhone: 'M',
        candidatePersonalPhone: 'M',
        candidateEmail: 'M',
        candidateFatherName: 'M',
        candidateMotherName: 'M',
        candidateMotherOccupation: 'M',
        candidateFatherOccupation: 'M',
        candidateMotherPhone: 'M',
        candidateFatherPhone: 'M',
        candidateMiddleSchool: 'M',
        candidateMunicipalitySchool: 'M',
        candidateStateSchool: 'M',
        candidateSchoolType: 'M',
        candidateSchoolRegime: 'M',
        candidateSchoolKey: 'M',
        candidateEndDate: 'M',

        insuranceNumber: 'M',
        healthCandidateHeight: 'M',
        healthCandidateWeight: 'M',
        healthCandidateBloodType: 'M',
        healthIllnessFlag: 'M',
        healthDisability: 'M',
        healthGlassesFlag: 'M',
        healthSmokingFlag: 'M',
        healthLaterality: 'M',

        preferencesScholarshipFlag: 'M',
        preferencesShiftWished: 'M',
        preferencesWayToKnow: 'M',
        preferencesSpecialtyWhished1: 'M',
        preferencesSpecialtyWhished2: 'M',
        preferencesSpecialtyWhished3: 'M',
        preferencesSpecialtyWhished4: 'M',

        finalScore: 'M'
    },
    {
        candidateName: "Josef",
        candidateLastNameFather: 450500,
        candidateLastNameMother: 'M',
        candidateBirthDate: true,
        candidateCivilStatus: 'M',
        candidateGenre: 'M',
        candidateAge: 'M',
        candidateMunicipalityBorn: 'M',
        candidateLocalityBorn: 'M',
        candidateStateBorn: 'M',
        candidateCurrentStreet: 'M',
        candidateCurrentHouseNumber: 'M',
        candidateNeighborhood: 'M',
        candidateCurrentZipCode: '54060',
        candidateCurrentMunicipality: 'M',
        candidateCurrentLocality: 'M',
        candidateCurrentState: 'M',
        candidateCellPhone: 'M',
        candidatePersonalPhone: 'M',
        candidateEmail: 'M',
        candidateFatherName: 'M',
        candidateMotherName: 'M',
        candidateMotherOccupation: 'M',
        candidateFatherOccupation: 'M',
        candidateMotherPhone: 'M',
        candidateFatherPhone: 'M',
        candidateMiddleSchool: 'M',
        candidateMunicipalitySchool: 'M',
        candidateStateSchool: 'M',
        candidateSchoolType: 'M',
        candidateSchoolRegime: 'M',
        candidateSchoolKey: 'M',
        candidateEndDate: 'M',

        insuranceNumber: 'M',
        healthCandidateHeight: 'M',
        healthCandidateWeight: 'M',
        healthCandidateBloodType: 'M',
        healthIllnessFlag: 'M',
        healthDisability: 'M',
        healthGlassesFlag: 'M',
        healthSmokingFlag: 'M',
        healthLaterality: 'M',

        preferencesScholarshipFlag: 'M',
        preferencesShiftWished: 'M',
        preferencesWayToKnow: 'M',
        preferencesSpecialtyWhished1: 'M',
        preferencesSpecialtyWhished2: 'M',
        preferencesSpecialtyWhished3: 'M',
        preferencesSpecialtyWhished4: 'M',

        finalScore: 'M'
    },
    {
        candidateName: "Josef",
        candidateLastNameFather: 450500,
        candidateLastNameMother: 'M',
        candidateBirthDate: true,
        candidateCivilStatus: 'M',
        candidateGenre: 'M',
        candidateAge: 'M',
        candidateMunicipalityBorn: 'M',
        candidateLocalityBorn: 'M',
        candidateStateBorn: 'M',
        candidateCurrentStreet: 'M',
        candidateCurrentHouseNumber: 'M',
        candidateNeighborhood: 'M',
        candidateCurrentZipCode: '54060',
        candidateCurrentMunicipality: 'M',
        candidateCurrentLocality: 'M',
        candidateCurrentState: 'M',
        candidateCellPhone: 'M',
        candidatePersonalPhone: 'M',
        candidateEmail: 'M',
        candidateFatherName: 'M',
        candidateMotherName: 'M',
        candidateMotherOccupation: 'M',
        candidateFatherOccupation: 'M',
        candidateMotherPhone: 'M',
        candidateFatherPhone: 'M',
        candidateMiddleSchool: 'M',
        candidateMunicipalitySchool: 'M',
        candidateStateSchool: 'M',
        candidateSchoolType: 'M',
        candidateSchoolRegime: 'M',
        candidateSchoolKey: 'M',
        candidateEndDate: 'M',

        insuranceNumber: 'M',
        healthCandidateHeight: 'M',
        healthCandidateWeight: 'M',
        healthCandidateBloodType: 'M',
        healthIllnessFlag: 'M',
        healthDisability: 'M',
        healthGlassesFlag: 'M',
        healthSmokingFlag: 'M',
        healthLaterality: 'M',

        preferencesScholarshipFlag: 'M',
        preferencesShiftWished: 'M',
        preferencesWayToKnow: 'M',
        preferencesSpecialtyWhished1: 'M',
        preferencesSpecialtyWhished2: 'M',
        preferencesSpecialtyWhished3: 'M',
        preferencesSpecialtyWhished4: 'M',

        finalScore: 'M'
    }
];

class DownloadCandidates extends Component {
    render() {
        return (
            <ExcelFile element={<Button variant="contained" color="secondary">XML Aspirantes</Button>}>
                <ExcelSheet data={dataSet1} name="Aspirantes">
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