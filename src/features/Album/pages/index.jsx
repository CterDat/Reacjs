import React from 'react';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhường Người Đến Sau',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/7/c/d/c7cd466614cd89b9db048804dad367a4.jpg'
        },
        {
            id: 2,
            name: 'SLASH',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/6/d/f/86df19a9d1fce0d3c182fab9366b27ca.jpg'
        },
        {
            id: 3,
            name: 'Hẹn Anh Mùa Thứ Năm',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/3/c/3/a3c34c951b1cebb7ca3517f98348ef14.jpg'
        }
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList} />

        </div>
    );
}

export default AlbumFeature;