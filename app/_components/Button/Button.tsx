'use client'
import React from 'react'
import { ButtonProps } from './types'
import { clsx } from 'clsx'
// import { Spinner } from '@components'




export const Button = ({ size = 'fit', variant = 'primary', iconSide = 'right', fullWidth, leftIcon: LeftIcon, rightIcon: RightIcon, fillFlex, className, children, loading, ...props }: ButtonProps) => {


    const iconColorFn = (def?: string) => {

        return 'text-current'

        // if (def) return def

        // if (variant === 'black' || variant == 'orange') return 'text-white'
        // else return 'text-primary-main'
    }
    return (
        <><button

            className={
                clsx(
                    [
                        '  px-5 py-3   flex flex-row  gap-3 outline-none justify-center items-center transition-all font-semibold duration-300 rounded-lg cursor-pointer ', ///General Style
                        variant == 'primary' && 'bg-cr1  text-white   ',
                        variant == 'secondary' && 'bg-cr2 text-white  ',
                        variant == 'tertiary' && 'bg-cr3 text-white   ',
                        variant == 'orange' && 'bg-gradient-5 text-gray-1   border-[3px] border-[#f3e658] hover:border-white ',
                        variant == 'outlined' && 'bg-transparent  border border-primary text-primary ',
                        variant == 'text' && 'border-transparent bg-transparent text-primary',
                        variant == 'error' && 'border-error-border border-[3px]  text-white bg-error',
                        variant == 'white' && 'bg-white text-black ',
                        (variant == 'disabled' || props.disabled) && 'bg-[#4E2C18] text-[#7E7E7E] border-[#4E2C18]',
                        size == 'fit' && (!children ? 'px-2.5' : 'px-4'),
                        size == 'medium' && 'w-[12rem]',
                        size == 'large' && 'w-[19rem]',
                        size == 'xlarge' && 'w-[23rem]',
                        fullWidth && 'w-full box-border',
                        fillFlex && 'flex-1',
                        className,
                        iconSide == 'right' ? 'flex-row' : 'flex-row-reverse'
                    ]
                )

            }


            {...props} disabled={props.disabled ?? loading} >
            {!loading && LeftIcon && <LeftIcon className={clsx('w-7 h-7')} />}
            {loading ? <span>...</span> : children}
            {!loading && RightIcon && <RightIcon className={clsx('w-7 h-7')} />}
        </button>


        </>
    )
}

