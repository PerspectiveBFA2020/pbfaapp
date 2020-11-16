import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSession } from '../firebase/UserProvider';
import { firestore } from '../firebase/config';
import { updateUserDocument } from '../firebase/user';
import { ProfileImage } from '../ProfileImage';
import Header from '../Header';


const Profile = () => {
  const { user } = useSession();
  const params = useParams();
  const { register, setValue, handleSubmit } = useForm();
  const [userDocument, setUserDocument] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const docRef = firestore.collection('users').doc(params.id);
    const unsubscribe = docRef.onSnapshot((doc) => {
      if (doc.exists) {
        const documentData = doc.data();
        setUserDocument(documentData);
        const formData = Object.entries(documentData).map((entry) => ({
          [entry[0]]: entry[1],
        }));

        setValue(formData);
      }
    });
    return unsubscribe;
  }, [user.uid, setValue, params.id]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await updateUserDocument({ uid: params.id, ...data });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (!userDocument) {
    return null;
  }

  const formClassname = `ui big form twelve wide column ${isLoading ? 'loading' : ''}`;

  const projects = [0,1,2]

  return (
    <div><Header></Header>
    <div
      className="add-form-container"
      style={{ maxWidth: 960, margin: '50px auto' }}
    >
      
      <div className="ui grid stackable">
        <ProfileImage id={params.id} />
        <form className={formClassname} onSubmit={handleSubmit(onSubmit)}>
          <div className="fields">
            <div className="eight wide field">
              <label>
              <div className="label">Name</div>
                <input type="text" name="name" ref={register} />
              </label>
            </div>
            <div className="eight wide field">
              <label>
              <div className="label">Email</div>
                <input type="text" name="email" disabled ref={register} />
              </label>
            </div>
          </div>

          <div className="fields">
            <div className="eight wide field">
              <label>
              <div className="label">Bio</div>
                <textarea name="bio" ref={register} />
              </label>
              <br/>
              <div className="eight wide field">
              <label>
              <div className="label">Social Media</div>
                <input type="text" name="social" ref={register} />
              </label>
              <br/>
            </div>

            <div className="field">
              <label>
              <div className="label">Resume URL</div>
                <input type="text" placeholder="https://google..." name="resume" ref={register} />
              </label>
            </div>

            <div className="field">
              <label>
                <div className="label"> Website URL</div>
                <input type="text" placeholder="https://google..." name="website" ref={register} />
              </label>
            </div>
            </div>
           
            


            
          </div>
          
          

          {
            projects.map((i) => (
<div>
<div className="fields">
          
                <div className="field">
                    <label><div className="label">
                          Projects {i+1} Title
                      <input type="text" name={`p${i}t`} ref={register} />
                      </div></label>
                  </div>
                  </div>

            <div className="fields">
            
          <div className="field">
              <label><div className="label">
                    Projects {i+1} Dimensions
                    <br/>
                <textarea name={`p${i}dim`}  ref={register} />
                </div></label>
            </div>
            </div>

            <div className="fields">


            <div className="field">
              <label>
              <div className="label">Projects {i+1} Long Description</div>
                <textarea name={`p${i}ld`} ref={register} />
              </label>
              </div>


              <div className="field">
              <div className="field">
              <label>
              <div className="label">Image URL Project {i+1} </div>
                <input type="text" placeholder="https://google..." name={`p${i}i`} ref={register} />
              </label>
            </div>
            </div>

            </div>

            </div>


            ))
          }  
          




            
            
            
            
            
           
            
          
          <button
            type="submit"
            className="ui submit large grey button right floated"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Profile;
