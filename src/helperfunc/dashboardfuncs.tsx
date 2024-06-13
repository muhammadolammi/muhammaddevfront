import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { isUserLoggedIn, refreshToken } from '../auth/auth';
import { User } from '../auth/models';

const TOKEN_REFRESH_THRESHOLD = 5 * 60 * 1000; // 5 minutes in milliseconds
const COOKIE_NAME = 'token';



export const useTokenRefresh = (user: User) => {
    const navigate = useNavigate();
  
    const getCookieExpiration = (name: string): number | null => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        const expirationTime = new Date(parts.pop()?.split(';').shift() || '').getTime();
        return expirationTime;
      }
      return null;
    };
  
    const handleTokenRefresh = async () => {
      try {
        await refreshToken(user.email, user.refreshToken);
      } catch (error) {
        console.log(error);
      }
    };
  
    const scheduleTokenRefresh = (expirationTime: number) => {
      const refreshTime = expirationTime - Date.now() - TOKEN_REFRESH_THRESHOLD;
      setTimeout(() => {
        handleTokenRefresh();
      }, refreshTime);
    };
  
    const resetTimer = () => {
      const expirationTime = getCookieExpiration(COOKIE_NAME);
      if (expirationTime) {
        scheduleTokenRefresh(expirationTime);
      }
    };
  
    useEffect(() => {
      const isUserLogin = isUserLoggedIn();
      if (!isUserLogin) {
        navigate("/signin");
        return;
      }
  
      const expirationTime = getCookieExpiration(COOKIE_NAME);
      if (expirationTime) {
        scheduleTokenRefresh(expirationTime);
      }
  
      window.addEventListener('mousemove', resetTimer);
      window.addEventListener('keypress', resetTimer);
  
      return () => {
        window.removeEventListener('mousemove', resetTimer);
        window.removeEventListener('keypress', resetTimer);
      };
    }, []);
  
  };
  