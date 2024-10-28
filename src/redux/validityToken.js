export const isTokenValid = (token) => {
    if (!token) return false;
  
    try {
      const [, payload] = token.split('.');
      
      const decodedPayload = JSON.parse(atob(payload));
      
      const expiry = decodedPayload.exp;
      const now = Math.floor(Date.now() / 1000);
  
      return expiry > now;
    } catch (error) {
      console.error("Token invalide :", error);
      return false;
    }
  };
  