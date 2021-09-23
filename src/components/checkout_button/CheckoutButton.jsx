import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Message,
} from '@boldcommerce/stacks-ui';
import { useCheckoutStore, usePaymentIframe } from '../../hooks';

const CheckoutButton = ({
  disabled, onClick, loading, className, errorMessage,
}) => (
  <>
    { errorMessage ? <Message type="alert">{ errorMessage }</Message> : null }
    <Button onClick={onClick} disabled={disabled} loading={loading} className={className}>
      Complete Order
    </Button>
  </>
);

CheckoutButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
};

const CheckoutButtonContainer = ({ className }) => {
  const { state } = useCheckoutStore();
  const { orderStatus } = state.orderInfo;
  const orderErrorMessage = state.errors.order?.public_order_id;
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
  // don't disable checkout button if error is order error or PIGI error
    setHasErrors(Object.keys(state.errors).some((errorKey) => (errorKey !== 'order' && errorKey !== 'paymentIframe') && state.errors[errorKey] !== null));
  }, [state.errors]);

  const checkoutButtonDisabled = state.loadingStatus.isLoading || hasErrors;

  const { processPaymentIframe } = usePaymentIframe();
  const processing = orderStatus === 'processing' || orderStatus === 'authorizing';
  const onClick = processing ? null : processPaymentIframe;

  return <CheckoutButton disabled={checkoutButtonDisabled} onClick={onClick} loading={processing} className={className} errorMessage={orderErrorMessage} />;
};

export default CheckoutButtonContainer;
