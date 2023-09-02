

export const AuthLayout = ({ children, titulo = '' }) => {
    return (
        <div className="df-contenedor ">
            <div className='hijo animate__animated animate__fadeIn'>
                <h3>{titulo}</h3>
                {children}
            </div>
        </div>
    );
}