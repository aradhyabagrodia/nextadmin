import { fetchUser } from "@/app/lib/data"
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"
const SingleUserPage = async ({params}) => {
    const { id } = params;
    const user = await fetchUser(id);
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={user.img || "/noavatar.png"} alt="" fill/>
                </div>
                {user.username}
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                <label>UserName</label>
                <input type="text" name="username" placeholder={user.username} />
                <label>Email</label>
                <input type="email" name="email" placeholder={user.email} />
                <label>Password</label>
                <input type="password" name="password" />
                <label>Phone</label>
                <input type="phone" name="phone" placeholder={user.phone} />
                <label>Address</label>
                <input type="text" name="address" placeholder={user.address} />
                <label>is Admin?</label>
                <select name="isAdmin" id="isAdmin">
                <option value={true} selected={user.isAdmin}>Yes</option>
                <option value={false}selected={!user.isAdmin}>No</option>
                </select>
                <label>is Active?</label>
                <select name="isActive" id="isActive">
                <option value={true} selected={user.isActive}>Yes</option>
                <option value={false} selected={user.isActive}>No</option>
                </select>
                <button className={styles.button}>Update</button>
                </form>

            </div>
        </div>
    )
}
export default SingleUserPage