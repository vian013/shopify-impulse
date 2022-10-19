import React from 'react'
import styled from 'styled-components'

const SecondaryButton = styled.div`
    text-align: center;
    --border-color--1: #d9d9d9;
    --bg-color--1: #ffffff;

    .btn {
        text-transform: uppercase;
        padding: 9px 12px;
        border: 1px solid var(--border-color--1);
        font-size: 13px;
        letter-spacing: .2em;
        margin-top: 15px;
        margin-bottom: 30px;
        cursor: pointer;
        background: var(--bg-color--1);
    }
` 

export default SecondaryButton