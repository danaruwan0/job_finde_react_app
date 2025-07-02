import { BiFontSize } from "react-icons/bi";
import './profileSection.css'

const ProfileSection = () => {
  return (
    <section>
      <h2 className="section-title" >Profile Settings</h2>

      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" placeholder='Dananjaya' />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text"  placeholder='Sandaruwan'/>
        </div>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email"  placeholder='dananjaya@example.com' />
      </div>

      <div className="form-group">
        <label>Bio</label>
        <textarea placeholder="Tell us about you...">
          Passionate software engineer with a love for clean code.
        </textarea>
      </div>

      <button className="btn">Save Profile</button>
    </section>
  );
};

export default ProfileSection;
