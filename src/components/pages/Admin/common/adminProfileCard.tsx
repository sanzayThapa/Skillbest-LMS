"use client";
import ImageWithBasePath from '@/core/common/imageWithBasePath'
import { useSession } from 'next-auth/react';

const AdminProfileCard = () => {
    const { data: session } = useSession();
    return (
        <div className="instructor-profile">
            <div className="instructor-profile-bg">
                <ImageWithBasePath
                    src="/assets/img/bg/card-bg-01.png"
                    className="instructor-profile-bg-1"
                    alt=""
                />
            </div>
            <div className="row align-items-center row-gap-3">
                <div className="col-md-6">
                    <div className="d-flex align-items-center">
                        <span className="avatar flex-shrink-0 avatar-xxl avatar-rounded me-3 border border-white border-3 position-relative">
                            <div className="w-100 h-100 bg-gray-700 flex items-center justify-center text-white text-2xl font-bold">
                                {session?.user?.name?.[0] || 'A'}
                            </div>
                            <span className="verify-tick">
                                <i className="isax isax-verify5" />
                            </span>
                        </span>
                        <div>
                            <h5 className="mb-1 text-white d-inline-flex align-items-center">
                                {session?.user?.name}
                            </h5>
                            <p className="text-light">Administrator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProfileCard
