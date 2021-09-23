import { useContext } from 'react';
import { CheckoutStatus } from '../store';

const useLoadingStatus = () => {
  const { statusState } = useContext(CheckoutStatus);

  return {
    data: statusState.loadingStatus,
  };
};

export default useLoadingStatus;
