import { gql } from "@apollo/client";

interface ExChangeInventory {
  currency: string;
  rate: string;
}

export interface ExChangeRateData {
  // rates: { currency: string; rate: string }[]; // or use this
  rates: ExChangeInventory[];
}

export interface ExChangeRateVar {
  currency: string;
}

export const GetExChangeRate = gql`
  query GetExChangeRates($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
    }
  }
`;
