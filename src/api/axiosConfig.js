import axios from 'axios';

const loginpath='login';
const desktoppath='desktop';
const actionPanal='ActionPanal';
const navigationPanal = 'NavigationPanal';
const addparty = 'addparty';
const BASE_URL = 'http://localhost:8080/';

export const axiosConfig = async (username, password) => {
    try {
        const login = BASE_URL + loginpath
    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);
    
    const response = await axios.post(login, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error occurred during login:', error);
    return null;
  }

};
export const axiosConfigDesktop = async () => {
  try {
    const desktopUrl = BASE_URL+desktoppath;
    const response = await axios.get(desktopUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching desktop data:', error);
    return [];
  }
};

export const axiosConfigActionPanal = async () => {
  try {
    const desktopUrl = BASE_URL+actionPanal;
    const response = await axios.get(desktopUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching desktop data:', error);
    return [];
  }
};

export const axiosConfigNavigationPanal = async () => {
  try {
    const desktopUrl = BASE_URL+navigationPanal;
    const response = await axios.get(desktopUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching desktop data:', error);
    return [];
  }
};

export const axiosConfigPartyDetailsStore = async (id,name, title, forename, lastname,
    phonenumber, mobilenumber, officephone, faxnumber, homeemail, officemail) => {
    try {
        const party = BASE_URL + addparty
        const requestData = {id,name,title,forename,lastname,phonenumber,mobilenumber,officephone,
                             faxnumber,homeemail,officemail};

        await axios.post(party, requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
       
    } catch (error) {
        console.error('Error occurred during login:', error);
        return null;
    }
};