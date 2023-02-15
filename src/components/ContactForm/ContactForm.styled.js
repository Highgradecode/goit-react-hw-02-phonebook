const { default: styled } = require("@emotion/styled");

export const ContactFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;

    input{
        margin-left: 10px;
        border-radius: 5px;
    }

    .submit-button{
        width: 150px;
        margin: 0 auto;
        border-radius: 5px;
        background-color: rgba(0, 255, 0 ,0.3);
    }
`