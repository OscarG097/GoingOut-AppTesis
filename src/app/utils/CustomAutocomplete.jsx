import { Autocomplete, TextField } from "@mui/material"

const CustomAutocomplete = ({ options, label }) => {
    return (
        <Autocomplete
            multiple
            limitTags={4}
            options={options}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
                <TextField {...params} label={label} placeholder={label} />
            )}
            sx={{ width: '500px', padding: '10px' }}
        />
    )
}

export default CustomAutocomplete