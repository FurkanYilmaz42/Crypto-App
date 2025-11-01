import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import coinApi from "../../services/coinApi.js";
import Loader from "../../components/Loader";
import CoinHeader from "../../components/detail/coin-header";
import Error from "../../components/Error";
import CoinPrice from "../../components/detail/coin-price.jsx";
import CoinChartSection from "../../components/detail/coin-chart-section.jsx";
import CoinStats from "../../components/detail/coin-stats.jsx";
import CoinDescription from "../../components/detail/coin-description.jsx";
import RefreshInfo from "../../components/home/refresh-info.jsx";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coin, setCoin] = useState(null);
  const [refreshing, setRefreshing] = useState(true);
  const [historyLoading, setHistoryLoading] = useState(true);
  const [priceHistory, setPriceHistory] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState(7);

  //coin detaylarini cekip state guncelleyen fonksiyon
  const fetchCoinDetails = useCallback(
    (isRefreshing = false) => {
      if (isRefreshing) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      coinApi
        .getCoinDetails(id)
        .then((data) => {
          setCoin(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
          setRefreshing(false);
        });
    },
    [id]
  );

  // sayfa yuklenince coin detay verisini ceken fonksiyon
  useEffect(() => {
    fetchCoinDetails();
  }, []);

  // loading aninda
  if (loading) return <Loader />;

  //hata varsa
  if (error)
    return <Error message={error} refetch={() => fetchCoinDetails()} />;

  return (
    <div className="space-y-6">
      <CoinHeader coin={coin} refetch={() => fetchCoinDetails(true)} refreshing={refreshing} />

      <CoinPrice coin={coin} />

      <CoinChartSection coin={coin} selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod}/>

      <CoinStats coin={coin} />

      <CoinDescription coin={coin} />

      <RefreshInfo show={refreshing} />
    </div>
  );
};

export default Detail;
