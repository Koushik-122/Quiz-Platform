import React, { useState } from "react";
import Newquizform from "./newquizform";
import { Button, Dialog, DialogActions } from "@mui/material";
const MCQsingle = () => {
    const [pop, setpop] = useState(true)
    const clicked = () => {
        setpop(false)
    };
    return (
        <div style={{ marginTop: "100px" }}>
            {pop ?
                <div className="container_mcq">
                    <Dialog open={true}>
                        <DialogActions>
                            <Button sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} onClick={clicked}>
                                MCQsingle
                                (single correct)
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                :
                <Newquizform />
            }
        </div>
    )
}

export default MCQsingle;