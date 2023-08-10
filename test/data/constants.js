const path = require('path')

module.exports = {
  DEFAULT_ONG_LOCAL_PRIVATE_KEY_URI: path.join(path.dirname(__filename), 'entities', 'keys', 'key.json'),
  DEFAULT_ONG_REMOTE_PRIVATE_KEY_URI: 'http://localhost/sunbirdrc/keys/Ong.json',

  LOCAL_PRIVATE_KEYS_URI_BASE: path.join(path.dirname(__filename), 'entities', 'keys') + '/',
  LOCAL_CREDENTIAL_SCHEMA_TEMPLATES_URI_BASE: path.join(path.dirname(__filename), 'entities', 'templates') + '/',

  REMOTE_PRIVATE_KEYS_URI_BASE: 'http://localhost/sunbirdrc/keys/',
  REMOTE_CREDENTIAL_SCHEMA_TEMPLATES_URI_BASE: 'http://localhost/sunbirdrc/schema_templates/',

  PRIVATE_KEY_URI_JSON_PATH_CHECKER_VACCINATION: path.join(path.dirname(__filename), 'pathchecker-eddsa-key.json'),
  SCHEMA_TMPLATE_URI_JSON_PATH_CHECKER_VACCINATION: path.join(
    path.dirname(__filename),
    'pathchecker-eddsa-template.json'
  ),
  TEST_PAYLOAD: {
    '@context': ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/dgc/v1'],
    type: ['VerifiableCredential'],
    issuer: 'did:web:PCF.PW:1A12',
    issuanceDate: '2021-05-18T16:06:06Z',
    credentialSubject: {
      '@context': ['https://w3id.org/dgc/v1'],
      type: 'DGCCertificate',
      personalInformation: {
        '@context': ['https://w3id.org/dgc/v1'],
        type: 'DGCSubject',
        familyName: "d'Arsøns - van Halen",
        givenName: 'François-Joan',
        stdFamilyName: 'DARSONS<VAN<HALEN',
        stdGivenName: 'FRANCOIS<JOAN',
        birthDate: '2009-02-28',
      },
      proofOfRecovery: [
        {
          '@context': ['https://w3id.org/dgc/v1'],
          type: 'DGCProofOfRecovery',
          id: 'urn:uvci:01:NL:LSP/REC/1289821',
          issuerName: 'Ministry of VWS',
          countryOfTest: 'NL',
          infectionInformation: {
            '@context': ['https://w3id.org/dgc/v1'],
            type: 'DGCInfectionInformation',
            diseaseRecoveredFrom: '840539006',
            dateFirstPositive: '2021-04-21',
            validFrom: '2021-05-01',
            validUntil: '2021-10-21',
          },
        },
      ],
      proofOfVaccination: [
        {
          '@context': ['https://w3id.org/dgc/v1'],
          type: 'DGCProofOfVaccination',
          id: 'urn:uvci:01:NL:PlA8UWS60Z4RZXVALl6GAZ',
          issuerName: 'Ministry of VWS',
          countryOfVaccination: 'NL',
          vaccinationInformation: {
            '@context': ['https://w3id.org/dgc/v1'],
            type: 'DGCVaccinationInformation',
            diseaseProtectedFrom: '840539006',
            prophylaxis: '1119349007',
            dateOfVaccination: '2021-05-05',
            dose: 1,
            totalDoses: 2,
            marketingAuthHolder: 'ORG-100030215',
            medicinalProductName: 'EU/1/20/1528',
          },
        },
        {
          '@context': ['https://w3id.org/dgc/v1'],
          type: 'DGCProofOfVaccination',
          id: 'urn:uvci:01:NL:ATS342XDYS358FDFH3GTK5',
          issuerName: 'Ministry of VWS',
          countryOfVaccination: 'NL',
          vaccinationInformation: {
            '@context': ['https://w3id.org/dgc/v1'],
            type: 'DGCVaccinationInformation',
            diseaseProtectedFrom: '840539006',
            prophylaxis: '1119349007',
            dateOfVaccination: '2021-05-25',
            dose: 2,
            totalDoses: 2,
            marketingAuthHolder: 'ORG-100030215',
            medicinalProductName: 'EU/1/20/1528',
          },
        },
      ],
      proofOfCovidTest: [
        {
          '@context': ['https://w3id.org/dgc/v1'],
          type: 'DGCProofOfCovidTest',
          id: 'urn:uvci:01:NL:GGD/81AAH16AZ',
          issuerName: 'Ministry of VWS',
          countryOfTestAdminstration: 'NL',
          testInformation: {
            '@context': ['https://w3id.org/dgc/v1'],
            type: 'DGCTestInformation',
            diseaseTestedFrom: '840539006',
            testName: 'COVID PCR',
            testManufacturer: '1232',
            testType: 'LP217198-3',
            sampleCollectionDateTime: '2021-02-13T14:20:00Z',
            testResult: '260415000',
            testCenter: 'GGD Fryslân, L-Heliconweg',
          },
        },
        {
          '@context': ['https://w3id.org/dgc/v1'],
          type: 'DGCProofOfCovidTest',
          id: 'urn:uvci:01:NL:GGD/23BBS36BC',
          issuerName: 'Ministry of VWS',
          countryOfTestAdminstration: 'NL',
          testInformation: {
            '@context': ['https://w3id.org/dgc/v1'],
            type: 'DGCTestInformation',
            diseaseTestedFrom: '840539006',
            testName: 'NAAT TEST',
            testManufacturer: '1343',
            testType: 'LP6464-4',
            sampleCollectionDateTime: '2021-04-13T14:20:00Z',
            testResult: '260373001',
            testCenter: 'GGD Fryslân, L-Heliconweg',
          },
        },
      ],
    },
  },

  ONG_TEST_PAYLOAD: {
    '@context': ['https://www.w3.org/2018/credentials/v1', 'http://localhost/ong.jsonld'],
    type: ['VerifiableCredential'],
    credentialSubject: {
      '@context': [
        'https://www.w3.org/2018/credentials/v1',
        'http://localhost/ong.jsonld',
      ],
      type: 'Ong',
      accronyme: 'ONGDTest',
      dateSignature: '12-07-2023',
      numeroAttestation: 'ONGA23457test',
      nomSignataire: 'Xampy',
      siege: 'Lome',
      fonctionSignataire: 'Dev',
      telephone: '+228O4567',
      ministre: 'ministre',
      nom: 'ONGDieuTest',
      dateDelivranceRecepisse: '12 AVRIL 2023',
      numeroRecepisse: 'TG1235Test',
      dateObtentionAttestation: '12 AVRIL 2023',
      adresse: 'Lomé GOogle',
      email: 'ongdieutest@gmail.com',
    },
    issuer: 'did:web:localhost:TEST0001',
    issuanceDate: '2021-05-18T16:06:06Z', //"2023-07-01T10:57:57.237Z",
  },
}
