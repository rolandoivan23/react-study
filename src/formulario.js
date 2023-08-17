import {useForm} from 'react-hook-form';

function UserForm(){
    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        defaultValues: {
            pais: 'mx'
        }
    });

    const name = watch('username');
    const incluirTelefono = watch('incluirTelefono');
    const createUser = (userData) => {
        console.log(userData);
    }

    const edadValidador = edad => edad >= 18 && edad <= 50;
    return (
        <div>

            <div>
                Nombre: {name}
            </div>
            <form onSubmit={handleSubmit(createUser)}>
                <label htmlFor="">Nombre</label>
                <input type="text" {...register('username', {required:true, maxLength: 15})} />
                {errors.username?.type === 'required' && <p>El nombre es un campo obligatorio</p>}
                {errors.username?.type === 'maxLength' && <p>El nombre debe incluir máximo 15 caracteres</p>}
                <label htmlFor="">Edad</label>
                <input type="text" {...register('edad', {validate: edadValidador})} />
                {errors.edad && <p>La edad debe de estar entre 18 y 50 años</p>}
                <label htmlFor="">Email</label>
                <input type="text" {...register('email', { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} />
                {errors.email?.type === 'pattern' && <p>Ingrese un email valido</p>}
                <label>País</label>
                <select {...register('pais')}>
                    <option value="es">España</option>
                    <option value="mx">México</option>
                    <option value="us">Estados unidos</option>
                </select>
                <label >Incluir teléfono?</label>
                <input type="checkbox" {...register('incluirTelefono')} />
                {incluirTelefono && (
                    <input type="text" {...register('telefono')} placeholder="623-323-2323"/>
                )}
                <input type="submit" />
            </form>
        </div>
    )
}

export default UserForm;