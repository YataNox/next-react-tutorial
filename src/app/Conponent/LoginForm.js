import React from 'react'
import { useForm } from 'react-hook-form'

function LoginForm() {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('email', { required: true })}
                placeholder="Email"
            />
            {errors?.email && <span>Email is required</span>}

            <input
                {...register('password', { required: true })}
                type="password"
                placeholder="Password"
            />
            {errors?.password && <span>Password is required</span>}

            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm
