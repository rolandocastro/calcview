/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import React from "react";
import PropTypes from "prop-types"


/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props 
 */
export const Layout = (props) => {   
       return (    
            <div>
                {props.children}
            </div>                
            
    );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout