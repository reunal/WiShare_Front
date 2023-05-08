import React from "react";
import { CardBaseStyle, ProductCardStyle } from "../../styles/CommonStyled";
import { Grid } from "@mui/material";

const Product = (): JSX.Element => {
  return (
    <>
      <Grid item xs={3}>
        <CardBaseStyle>
          <ProductCardStyle>
            <img src="" alt="" title="" />
            <div>
              <p>Category</p>
              <h6>MLB 캡모자</h6>
            </div>
            <div>
              <h3>39,000</h3>
              <button>위시하기</button>
            </div>
          </ProductCardStyle>
        </CardBaseStyle>
      </Grid>
    </>
  );
};

export default Product;
