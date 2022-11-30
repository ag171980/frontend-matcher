import { FaTimesCircle } from 'react-icons/fa';
import React, { useState } from 'react';
import { OnBoardingSuccess } from '../';
import axios from 'axios'

//endpoint crearUsuario
//http://localhost:8000/createUser
//https://backend-matcher-production.up.railway.app/createUser

type Props = {
    modalState: boolean
    setModalState: React.Dispatch<React.SetStateAction<boolean>>
};
  
type FormType = {
    name: string
    age: number
    gender: string
    genderInterest: string
    email: string
    password: string
    confirmPassword: string
    description: string,
};


const OnBoarding = ({ modalState, setModalState }: Props) => {
    const [activeClass, SetActiveClass] = useState<boolean>(false)
    const [showModalSuccess, setShowModalSuccess] = useState<boolean>(false)
    const [formData, setFormData] = useState<FormType>({
        name: "",
        age: 18,
        gender: "",
        genderInterest: "",
        email: "",
        password: "",
        confirmPassword: "",
        description: ""
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
    const createUser = async (dataToSend: any, imagenes:any) => {
        let dattaUser = dataToSend

        dattaUser.img1 = imagenes.img1
        dattaUser.img2 = imagenes.img2
        dattaUser.img3 = imagenes.img3
        dattaUser.img4 = imagenes.img4

        console.log(dattaUser)
        try {
            const response = await axios.post<FormData>(
                'https://backend-matcher-production.up.railway.app/createUser',
                dataToSend,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            );
            
            if (response.status === 200) {
                
                console.log(response.data)
                setShowModalSuccess(true)
        
            }
        } catch (e) {
            console.error(e)
        }
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    let imagenes = {
        img1: img1,
        img2: img2, 
        img3: img3, 
        img4: img4, 
    }
        createUser(formData, imagenes)
        
        setShowModalSuccess(true)
    }

    const handleClose = () => {
        SetActiveClass(true)
        setTimeout(() => {
            setModalState(false)
        }, 300)
        setTimeout(() => {
            SetActiveClass(false)
        }, 350)
    }
        
    return (
        <>
        {modalState ?
        <>
        <div className='formModalXl w-full h-full fixed top-0 left-0 bg-black/50 flex flex-col
        items-center justify-center'>
            <div className={activeClass ? "formModal formModalXl fadeInModal active"
            : "formModal formModalXl fadeInModal"}>
                <button type='button' className='btnNewUserFormClose absolute text-[#2346e3] iconShadowSm
                transition-all hover:scale-105' onClick={() => handleClose()}>
                    <FaTimesCircle className="text-[1.75rem] md:text-[2.5rem]" />
                </button>
                <form onSubmit={handleSubmit} className="newUserForm">
                    <div className='newUserFormContainer1'>
                        <div className='newUserFormData'>
                            <div className='flex flex-col items-start justify-center'>
                                <label htmlFor="name" className='text-sm font-bold text-[#ed3434]'>
                                    Nombre Completo
                                </label>
                                <input required placeholder="Tu nombre" name="name" type="text"
                                className='mt-2 bg-white/90 rounded-md p-2 shadow-sm w-[205px] text-sm'
                                onChange={getData}/>
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <label htmlFor="age" className='text-sm font-bold text-[#ed3434]'>
                                    Edad
                                </label>
                                <input required placeholder="18" name="age" type="number"
                                min="18" max="99" className='mt-2 bg-white/90 rounded-md p-2 shadow-sm
                                w-10 text-sm' onChange={getData}/>
                            </div>
                        </div>
                        <div className='newUserFormGender'>
                            <div className='flex flex-col items-start justify-center'>
                                <label htmlFor="gender" className='text-sm font-bold text-[#ed3434]'>
                                    Género
                                </label>
                                <select required name="gender" className='mt-2 bg-white/90 rounded-md p-2
                                shadow-sm w-[205px] text-sm' defaultValue="default"
                                onChange={getData}>
                                    <option value="default" disabled>Opciones</option>
                                    <option value="man">Hombre</option>
                                    <option value="woman">Mujer</option>
                                    <option value="notSpecified">Prefiero no aclararlo</option>
                                </select>
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <label htmlFor="genderInterest" className='text-sm font-bold text-[#ed3434]'>
                                    Me Interesan
                                </label>
                                <select required name="genderInterest" className='mt-2 bg-white/90 rounded-md p-2
                                shadow-sm w-[205px] text-sm' defaultValue="default"
                                onChange={getData}>
                                    <option value="default" disabled>Opciones</option>
                                    <option value="man">Hombres</option>
                                    <option value="woman">Mujeres</option>
                                    <option value="everyone">Cualquier género</option>
                                </select>
                            </div>
                        </div>
                        <div className='newUserFormEmailPassword'>
                            <div className='flex flex-col items-start justify-center mt-1'>
                                <label htmlFor="email" className='text-sm font-bold text-[#ed3434]'>
                                    Correo Electrónico
                                </label>
                                <input required placeholder="Tu email" name="email" type="email"
                                className='mt-2 bg-white/90 rounded-md p-2 shadow-sm w-[205px] text-sm'
                                onChange={getData}/>
                            </div>
                            <div className='flex flex-col items-start justify-center mt-1'>
                                <label htmlFor="password" className='text-sm font-bold text-[#ed3434]'>
                                    Contraseña
                                </label>
                                <input required placeholder="Tu contraseña" name="password" type="password"
                                className='mt-2 bg-white/90 rounded-md p-2 shadow-sm w-[205px] text-sm'
                                onChange={getData}/>
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <label htmlFor="confirmPassword" className='text-sm font-bold text-[#ed3434]'>
                                    Confimar Contraseña
                                </label>
                                <input required placeholder="Confirma tu contraseña" name="confirmPassword"
                                type="password" className='mt-2 bg-white/90 rounded-md p-2 shadow-sm
                                w-[205px] text-sm'
                                onChange={getData}/>
                            </div>
                        </div>
                    </div>
                    <div className="newUserFormContainer2">
                        <p className="text-sm font-bold text-[#ed3434]">Fotos Del Perfil</p>
                        <div className="newUserFormImages">
                            <label htmlFor="img1" className='relative aspect-[4/5] bg-[#e0d4d4] w-24
                            rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                                <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                                rotate-45 rounded-full absolute -bottom-1 -right-1" />
                            </label>
                            <input required type="file" name="img1" accept=".png, .jpg, .jpeg" className="hidden"
                            onChange={handleImage1} id="img1"/>
                            <label htmlFor="img2" className='relative aspect-[4/5] bg-[#e0d4d4] w-24
                            rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                                <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                                rotate-45 rounded-full absolute -bottom-1 -right-1" />
                            </label>
                            <input required type="file" name="img2" accept=".png, .jpg, .jpeg" className="hidden"
                            onChange={handleImage2} id="img2"/>
                            <label htmlFor="img3" className='relative aspect-[4/5] bg-[#e0d4d4] w-24
                            rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                                <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                                rotate-45 rounded-full absolute -bottom-1 -right-1" />
                            </label>
                            <input required type="file" name="img3" accept=".png, .jpg, .jpeg" className="hidden"
                            onChange={handleImage3} id="img3"/>
                            <label htmlFor="img4" className='relative aspect-[4/5] bg-[#e0d4d4] w-24
                            rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                                <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                                rotate-45 rounded-full absolute -bottom-1 -right-1" />
                            </label>
                            <input required type="file" name="img4" accept=".png, .jpg, .jpeg" className="hidden"
                            onChange={handleImage4} id="img4"/>
                        </div>
                        <small className='mt-2'>Se requieren 4 imágenes para crear el perfil.</small>
                        <div className='newUserFormDesc'>
                            <label htmlFor="description" className='text-sm font-bold text-[#ed3434] mt-2'>
                                Descripción
                            </label>
                            <textarea required maxLength={500}
                            placeholder="Cuéntanos un poco sobre tí" name="description"
                            className='mt-2 bg-white/90 rounded-md p-2 w-72 sm:w-80 h-36 shadow-sm text-sm
                            scrollbar-thin scrollbar-track-[#ed3434]/30 scrollbar-thumb-[#ed3434]/90'
                            onChange={getData}/>
                        </div>
                    </div>
                    <button type="submit" className='btnSubmit btnSubmitGradient textShadowSm btnTransition py-2
                    btnShadow shadow-md font-bold tracking-wider absolute text-[#FFEAEA] rounded-full px-6'>
                        Continuar
                    </button>
                </form>
            </div>
        </div>
        <OnBoardingSuccess modalState={modalState} setModalState={setModalState}
        modalSuccess={showModalSuccess} setModalSuccess={setShowModalSuccess} />
        </>
        : null}
        </>
    )
}

export default OnBoarding;

/*     const uploadImg = async (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        const file: File = (target.files as FileList)[0]
        const base64 = await convertImg(file)
        const formData = new FormData()
        formData.append("file", base64 as string | Blob)
        console.log(formData)
    }

    const convertImg = (file: File) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            
            fileReader.onload = () => {
                resolve(fileReader.result)
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }*/