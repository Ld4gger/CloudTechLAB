import { Button } from "@mui/material";
import { TextField } from "@mui/material"
import { width } from "@mui/system";

export default function AuthForm() {
    return <div style ={{
        backgroundColor: "#f4f4f4",
        alignItems: "center",
        borderRadius: 10,
        width: 200,
        height: 300,
        padding: 50,
    }}>
        <TextField id="outlined-basic" label="Поле ввода 1" variant="outlined" />
        <TextField id="filled-basic" label="поле ввода 2" variant="filled" type="password" />
        <Button variant="contained" color="inherit">ЖМЯК</Button>
    </div>
}