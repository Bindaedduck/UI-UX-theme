import { Routes, Route } from 'react-router-dom';
import SignInPage from '../pages/SignInPage';
import HistoryPage from '../pages/HistoryPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HistoryPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
}