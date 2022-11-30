import { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';

type Props = {
    modalState: boolean
    setModalState: React.Dispatch<React.SetStateAction<boolean>>
};

type FormType = {
    username: string
    age: number
    gender: string
    genderInterest: string
    email: string
    password: string
    confirmPassword: string
    description: string
};

const UserEditModal = ({ modalState, setModalState }: Props) => {
    const [formData, setFormData] = useState<FormType>({
        username: "",
        age: 18,
        gender: "",
        genderInterest: "",
        email: "",
        password: "",
        confirmPassword: "",
        description: "",
    })
    const [img1, setImg1] = useState<File[]>([])
    const [img2, setImg2] = useState<File[]>([])
    const [img3, setImg3] = useState<File[]>([])
    const [img4, setImg4] = useState<File[]>([])

    const handleImage1 = ({ currentTarget: {files}, }: React.ChangeEvent<HTMLInputElement>) => {
        if (files && files.length) {
            setImg1(existing => existing.concat(Array.from(files)))
        }
    }

    const handleImage2 = ({ currentTarget: {files}, }: React.ChangeEvent<HTMLInputElement>) => {
        if (files && files.length) {
            setImg2(existing => existing.concat(Array.from(files)))
        }
    }

    const handleImage3 = ({ currentTarget: {files}, }: React.ChangeEvent<HTMLInputElement>) => {
        if (files && files.length) {
            setImg3(existing => existing.concat(Array.from(files)))
        }
    }

    const handleImage4 = ({ currentTarget: {files}, }: React.ChangeEvent<HTMLInputElement>) => {
        if (files && files.length) {
            setImg4(existing => existing.concat(Array.from(files)))
        }
    }

    const getData = (
        e: React.ChangeEvent<HTMLInputElement> |
        React.ChangeEvent<HTMLSelectElement> |
        React.ChangeEvent<HTMLTextAreaElement>) => {
            setFormData(
                { ...formData, [e.target.name]: e.target.value }
            )
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(formData, img1, img2, img3, img4)
        setModalState(false)
    }

    return (
        <>
        {modalState ?
        <>
        <div className='h-[25.575rem] md:h-[32.5rem] w-[102%] bg-[#FFEAEA] rounded-2xl absolute flex flex-col
        items-center justify-center'>
            <button type='button' className='top-4 right-8 absolute text-[#2346e3] z-10
            iconShadowSm transition-all hover:scale-105' onClick={() => setModalState(false)}>
                <FaTimesCircle className="text-[1.75rem] md:text-[2rem]" />
            </button>
            <form onSubmit={handleSubmit} className="grid place-items-start px-6 py-8 gap-4 h-[92%]
            w-[94%] overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-[#ed3434]/30
            scrollbar-thumb-[#ed3434]/90">
                <p className="text-sm font-bold text-[#ed3434]">Editar Fotos</p>
                <div className="grid grid-cols-2 place-items-start gap-4 w-44 md:w-72">
                    <label htmlFor="img1" className='relative aspect-[4/5] bg-[#e0d4d4] w-20 md:w-28
                    rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                        <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                        rotate-45 rounded-full absolute -bottom-1 -right-1" />
                    </label>
                    <input type="file" name="img1" accept=".png, .jpg, .jpeg" className="hidden"
                    onChange={handleImage1} id="img1"/>
                    <label htmlFor="img2" className='relative aspect-[4/5] bg-[#e0d4d4] w-20 md:w-28
                    rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                        <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                        rotate-45 rounded-full absolute -bottom-1 -right-1" />
                    </label>
                    <input type="file" name="img2" accept=".png, .jpg, .jpeg" className="hidden"
                    onChange={handleImage2} id="img2"/>
                    <label htmlFor="img3" className='relative aspect-[4/5] bg-[#e0d4d4] w-20 md:w-28
                    rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                        <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                        rotate-45 rounded-full absolute -bottom-1 -right-1" />
                    </label>
                    <input type="file" name="img3" accept=".png, .jpg, .jpeg" className="hidden"
                    onChange={handleImage3} id="img3"/>
                    <label htmlFor="img4" className='relative aspect-[4/5] bg-[#e0d4d4] w-20 md:w-28
                    rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                        <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                        rotate-45 rounded-full absolute -bottom-1 -right-1" />
                    </label>
                    <input type="file" name="img4" accept=".png, .jpg, .jpeg" className="hidden"
                    onChange={handleImage4} id="img4"/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <label htmlFor="description" className='text-sm font-bold text-[#ed3434] mt-2'>
                        Editar Descripción
                    </label>
                    <textarea required maxLength={500}
                    placeholder="Cuéntanos un poco sobre tí" name="description"
                    className='mt-2 bg-white/90 rounded-md p-2 w-44 md:w-72 h-36 shadow-sm text-sm
                    scrollbar-thin scrollbar-track-[#ed3434]/30 scrollbar-thumb-[#ed3434]/90'
                    onChange={getData}/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <label htmlFor="name" className='text-sm font-bold text-[#ed3434]'>
                        Editar Nombre
                    </label>
                    <input placeholder="Tu nombre" name="userName" type="text"
                    className='mt-2 bg-white/90 rounded-md p-2 shadow-sm w-44 md:w-72 text-sm'
                    onChange={getData}/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <label htmlFor="age" className='text-sm font-bold text-[#ed3434]'>
                        Editar Edad
                    </label>
                    <input placeholder="18" name="age" type="number"
                    min="18" max="99" className='mt-2 bg-white/90 rounded-md p-2 shadow-sm
                    w-10 text-sm' onChange={getData}/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <label htmlFor="gender" className='text-sm font-bold text-[#ed3434]'>
                        Editar Género
                    </label>
                    <select name="gender" className='mt-2 bg-white/90 rounded-md p-2
                    shadow-sm w-44 md:w-72 text-sm' defaultValue="default"
                    onChange={getData}>
                        <option value="default" disabled>Opciones</option>
                        <option value="man">Hombre</option>
                        <option value="woman">Mujer</option>
                        <option value="notSpecified">Prefiero no aclararlo</option>
                    </select>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <label htmlFor="genderInterest" className='text-sm font-bold text-[#ed3434]'>
                        Editar Intereses
                    </label>
                    <select name="genderInterest" className='mt-2 bg-white/90 rounded-md p-2
                    shadow-sm w-44 md:w-72 text-sm' defaultValue="default"
                    onChange={getData}>
                        <option value="default" disabled>Opciones</option>
                        <option value="man">Hombres</option>
                        <option value="woman">Mujeres</option>
                        <option value="everyone">Cualquier género</option>
                    </select>
                </div>
                <div className='flex flex-col items-start justify-center mt-1'>
                    <label htmlFor="password" className='text-sm font-bold text-[#ed3434]'>
                        Editar Contraseña
                    </label>
                    <input placeholder="Nueva contraseña" name="password" type="password"
                    className='mt-2 bg-white/90 rounded-md p-2 shadow-sm w-44 md:w-72 text-sm'
                    onChange={getData}/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <label htmlFor="confirmPassword" className='text-sm font-bold text-[#ed3434]'>
                        Confimar Contraseña
                    </label>
                    <input placeholder="Confirma tu contraseña" name="confirmPassword"
                    type="password" className='mt-2 bg-white/90 rounded-md p-2 shadow-sm
                    w-44 md:w-72 text-sm'
                    onChange={getData}/>
                </div>
                <button type="submit" className='btnSubmitGradient textShadowSm btnTransition btnShadow
                shadow-md font-bold tracking-wider text-[#FFEAEA] mt-4 rounded-full px-6 py-2'>
                    Continuar
                </button>
            </form>
        </div>
        </>
        : null}
        </>
    )
}

export default UserEditModal;