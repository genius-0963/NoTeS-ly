import { Box } from "native-base";

const _renderItem = () => {
    return (
      <Box style={ProductBoxStyle.ImageBox}>
        <Image borderRadius="lg" src={image} alt="" size="xl"></Image>
      </Box>
    );
}
export default _renderItem