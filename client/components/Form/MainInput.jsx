import { styled, TextField } from "@mui/material";

const InputField = styled(TextField)({
    // width:'629px',
    '& label.Mui-focused': {
      color: '#ff6b81',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ff6b81',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#ff6b81',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ff6b81',
      },
    },
});

const MainInput = ({...props}) => {
    return (
        <InputField
            fullWidth
            required
            {...props}
        />
    )
}

export default MainInput;