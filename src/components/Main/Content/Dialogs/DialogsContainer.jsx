import Dialogs from "./Dialogs";
import React from "react";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";

export default compose(withAuthRedirect)(Dialogs);