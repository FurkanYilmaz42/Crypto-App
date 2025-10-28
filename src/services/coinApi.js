import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
  },
});

// Api istegi atan fonksiyonlar

const coinApi = {
  // top coinleri getiren fonksiyon
  async getTopCoins() {
    const res = await api.get("/coins/markets?vs_currency=usd");

      return res.data;
  },

  // coin detay verisi getiren fonksiyon
  async getCoinDetails() {},

  // fiyat gecmisini getiren fonksiyon
  async getPriceHistory() {},
};

export default coinApi;
