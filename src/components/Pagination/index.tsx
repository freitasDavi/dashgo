import { Box, Button, Stack } from "@chakra-ui/react";
import {PaginationIten} from "./PaginationItem";

export function Pagination() {
    return (
        <Stack
            direction={["column", "row"]}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <PaginationIten number={1} isCurrent={true} />
                <PaginationIten number={2}  />
                <PaginationIten number={3}  />
                <PaginationIten number={4}  />
                <PaginationIten number={5}  />
            </Stack>
        </Stack>
    );
}
