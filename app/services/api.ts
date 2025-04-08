import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = "http://192.168.1.7:5000/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const login = async (userName: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { 
      userName,  // Perhatikan penulisan 'userName' sesuai backend
      password 
    });
    
    console.log('Full Login Response:', JSON.stringify(response.data, null, 2));

    // Sesuaikan dengan struktur respons dari backend
    if (response.data && response.data.results && response.data.results.data && response.data.results.data.token) {
      const token = response.data.results.data.token;
      const user = response.data.results.data.user;
      
      // Simpan token dan informasi user
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      
      return {
        token,
        user
      };
    } else {
      throw new Error('Login gagal: Token tidak ditemukan');
    }
  } catch (error: any) {
    console.error('Login Error Details:', {
      message: error.message,
      response: error.response ? error.response.data : 'No response',
      status: error.response ? error.response.status : 'No status'
    });
    throw error;
  }
};

// Di file api.ts
export interface Article {
  id: string;
  image: string;
  title: string;
  description: string;
  createdAt: string;
  updateAt: string;
  deletedAt: string | null;
}

// Fungsi untuk mengambil artikel
export const getArticles = async () => {
  try {
    const response = await api.get('/article/getArticle');
    
    // Periksa struktur respons
    if (response.data && response.data.data) {
      // Kembalikan array artikel
      return response.data.data as Article[];
    } else {
      throw new Error('Gagal mendapatkan artikel: Struktur respons tidak sesuai');
    }
  } catch (error: any) {
    console.error('Error Get Artikel:', {
      message: error.message,
      response: error.response ? error.response.data : 'No response',
      status: error.response ? error.response.status : 'No status'
    });
    throw error;
  }
};



export interface Jurnal {
  id: string;
  topikJurnal: string;
  isiJurnal: string;
  tanggalRilisJurnal: string;
  status: string;
  pasienId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}


export const getJurnals = async () => {
  try {
    const response = await api.get('/jurnal/getJurnal');
    
    // Periksa struktur respons
    if (response.data && response.data.data) {
      // Kembalikan array jurnal
      return response.data.data as Jurnal[];
    } else {
      throw new Error('Gagal mendapatkan jurnal: Struktur respons tidak sesuai');
    }
  } catch (error: any) {
    console.error('Error Get Jurnal:', {
      message: error.message,
      response: error.response ? error.response.data : 'No response',
      status: error.response ? error.response.status : 'No status'
    });
    throw error;
  }
};

export interface Meditasi {
  id: string;
  topikMeditasi: string;
  isiContent: string;
  reminderMEditasi: string;
  status: string;
  pasienId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

// Fungsi untuk mengambil data meditasi
export const getMeditasis = async () => {
  try {
    const response = await api.get('/meditasi/getMeditasi');
    
    // Periksa struktur respons
    if (response.data && response.data.data) {
      // Kembalikan array meditasi
      return response.data.data as Meditasi[];
    } else {
      throw new Error('Gagal mendapatkan meditasi: Struktur respons tidak sesuai');
    }
  } catch (error: any) {
    console.error('Error Get Meditasi:', {
      message: error.message,
      response: error.response ? error.response.data : 'No response',
      status: error.response ? error.response.status : 'No status'
    });
    throw error;
  }
};
export default api;






// export const login = async (userName: string, password: string) => {
//   const res = await fetch(`${BASE_URL}/auth/login`, {
//     method: "POST",
//     headers: headers(),
//     body: JSON.stringify({ userName, password }),
//   });
//   return res.json();
// };



// ===================== USER =====================
// export const getUsers = async (token: string) => {
//   const res = await fetch(`${BASE_URL}/userManagementAdmin/getUser`, {
//     method: "GET",
//     headers: headers(token),
//   });
//   return res.json();
// };

// ===================== ARTICLE =====================
// export const getArticles = async (token: string) => {
//   const res = await fetch(`${BASE_URL}/article/getArticle`, {
//     method: "GET",
//     headers: headers(token),
//   });
//   return res.json();
// };

// export const getArticleById = async (token: string, id: string) => {
//   const res = await fetch(`${BASE_URL}/article/getArticleById/${id}`, {
//     method: "GET",
//     headers: headers(token),
//   });
//   return res.json();
// };

// ===================== JURNAL =====================
// export const getJurnal = async (token: string) => {
//   const res = await fetch(`${BASE_URL}/jurnal/getJurnal`, {
//     method: "GET",
//     headers: headers(token),
//   });
//   return res.json();
// };

// export const getJurnalById = async (token: string, id: string) => {
//   const res = await fetch(`${BASE_URL}/jurnal/getJurnalById/${id}`, {
//     method: "GET",
//     headers: headers(token),
//   });
//   return res.json();
// };

// ===================== MEDITASI =====================
// export const getMeditasi = async (token: string) => {
//   const res = await fetch(`${BASE_URL}/meditasi/getMeditasi`, {
//     method: "GET",
//     headers: headers(token),
//   });
//   return res.json();
// };

// export const getMeditasiById = async (token: string, id: string) => {
//   const res = await fetch(`${BASE_URL}/meditasi/getMeditasiById/${id}`, {
//     method: "GET",
//     headers: headers(token),
//   });
//   return res.json();
// };

// ===================== MEETING =====================
// export const generateMeetLink = async (
//   data: {
//     pasienId: string;
//     psychologyId: string;
//     appoinmentDate: string;
//     durationMinute: number;
//     meetLink: string;
//     topikMasalah: string;
//     deskripsiMasalah: string;
//   }
// ) => {
//   const res = await fetch(`${BASE_URL}/generate-meet/generate-meet-link`, {
//     method: "POST",
//     headers: headers(),
//     body: JSON.stringify(data),
//   });
//   return res.json();
// };

// export const getAppoinments = async (token: string) => {
//   const res = await fetch(`${BASE_URL}/generate-meet/getAppoinment`, {
//     method: "GET",
//     headers: headers(token),
//   });
//   return res.json();
// };

// export const getAppoinmentById = async (token: string, id: string) => {
//   const res = await fetch(`${BASE_URL}/generate-meet/getAppoinmentById/${id}`, {
//     method: "GET",
//     headers: headers(token),
//   });
//   return res.json();
// };


