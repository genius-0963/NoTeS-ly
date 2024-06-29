import { Box, Text } from 'native-base'
import React from 'react'
import ProductBoxStyle from '../StyleSheets/ProductBoxStyle';

const InfoDisplay = ({info}) => {
    return (
      <>
        <Box rounded="lg" style={ProductBoxStyle.HeadBoxStyle}>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            {info.label}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            {info.text}
          </Text>
        </Box>
      </>
    );
}

export default InfoDisplay