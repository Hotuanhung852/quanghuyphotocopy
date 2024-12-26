const products = {
    sachmaudankeonhiet: {
        image: 'assets/images/sachmaudankeonhiet.jpg',
        title: 'Sách Mẫu Dán Keo Nhiệt',
        category: 'PhotoCopy',
        description: 'Sách mẫu dán keo nhiệt là một sản phẩm chất lượng cao, được thiết kế để đáp ứng nhu cầu photocopy và in ấn của khách hàng. Với công nghệ dán keo nhiệt tiên tiến, sản phẩm đảm bảo độ bền và tính thẩm mỹ cao. Đây là lựa chọn hoàn hảo cho các tài liệu quan trọng và các dự án in ấn chuyên nghiệp.'
    },
    phototailieu: {
        image: 'assets/images/phototailieu.jpg',
        title: 'Photo Tài Liệu',
        category: 'PhotoCopy',
        description: 'Photo tài liệu là dịch vụ chất lượng cao, giúp bạn sao chép và in ấn các tài liệu quan trọng một cách nhanh chóng và hiệu quả.'
    },
    photosach: {
        image: 'assets/images/photosach.jpg',
        title: 'Photo Sách',
        category: 'PhotoCopy',
        description: 'Photo sách là dịch vụ chuyên nghiệp, giúp bạn sao chép và in ấn các cuốn sách với chất lượng cao và độ bền lâu dài.'
    },
    biamaivang: {
        image: 'assets/images/bia-ma-vang.jpg',
        title: 'Bìa Mạ Vàng Luận Văn',
        category: 'PhotoCopy',
        description: 'Bìa mạ vàng luận văn là sản phẩm cao cấp, giúp bảo vệ và tăng tính thẩm mỹ cho các luận văn và tài liệu quan trọng của bạn.'
    },
    thacsi: {
        image: 'assets/images/thacsi.jpg',
        title: 'Bìa Mạ Vàng - Vỏ Bằng Đại Học, Thạc Sĩ',
        category: 'PhotoCopy',
        description: 'Bìa mạ vàng - vỏ bằng đại học, thạc sĩ là sản phẩm chất lượng cao, giúp bảo vệ và tăng tính thẩm mỹ cho các bằng cấp quan trọng của bạn.'
    },
    cardtieuchuan: {
        image: 'assets/images/cardtieuchuan.jpg',
        title: 'Card Tiêu Chuẩn',
        category: 'In Nhanh',
        description: 'Card tiêu chuẩn là sản phẩm in nhanh chất lượng cao, giúp bạn có được những tấm card đẹp mắt và chuyên nghiệp trong thời gian ngắn.'
    },
    toroi2b: {
        image: 'assets/images/toroi2b.jpg',
        title: 'Tờ Rơi 2B',
        category: 'In Nhanh, In Offset',
        description: 'Tờ rơi 2B là sản phẩm in nhanh và in offset chất lượng cao, giúp bạn quảng bá thông tin một cách hiệu quả và ấn tượng.'
    },
    indecaldemi: {
        image: 'assets/images/indecaldemi.jpg',
        title: 'In Decal - Bế Demi',
        category: 'In Nhanh, In Quảng Cáo',
        description: 'In decal - bế demi là sản phẩm in nhanh và in quảng cáo chất lượng cao, giúp bạn có được những tấm decal đẹp mắt và bền bỉ.'
    },
    inkyyeu: {
        image: 'assets/images/inkyyeu.jpg',
        title: 'In Kỷ Yếu',
        category: 'In Nhanh',
        description: 'In kỷ yếu là sản phẩm in nhanh chất lượng cao, giúp bạn lưu giữ những kỷ niệm đáng nhớ một cách đẹp mắt và bền lâu.'
    },
    innamecard: {
        image: 'assets/images/innamecard.jpg',
        title: 'Name Card Chuẩn',
        category: 'In Offset',
        description: 'Name card chuẩn là sản phẩm in offset chất lượng cao, giúp bạn có được những tấm name card chuyên nghiệp và ấn tượng.'
    },
    td1: {
        image: 'assets/images/td1.jpg',
        title: 'Card TĐ1',
        category: 'In Offset',
        description: 'Card TĐ1 là sản phẩm in offset chất lượng cao, giúp bạn có được những tấm card đẹp mắt và chuyên nghiệp.'
    },
    namecardbogoc: {
        image: 'assets/images/namecardbogoc.jpg',
        title: 'Name Card Bo Góc',
        category: 'In Offset',
        description: 'Name card bo góc là sản phẩm in offset chất lượng cao, giúp bạn có được những tấm name card độc đáo và ấn tượng.'
    },
    incatalogue: {
        image: 'assets/images/in-catalogue.png',
        title: 'In Catalogue',
        category: 'In Offset',
        description: 'In catalogue là sản phẩm in offset chất lượng cao, giúp bạn có được những cuốn catalogue đẹp mắt và chuyên nghiệp.'
    },
    catalogue3: {
        image: 'assets/images/catalogue3.jpg',
        title: 'Catalogue 3',
        category: 'In Offset',
        description: 'Catalogue 3 là sản phẩm in offset chất lượng cao, giúp bạn có được những cuốn catalogue đẹp mắt và chuyên nghiệp.'
    },
    tuixachmau: {
        image: 'assets/images/tuixachmau.jpg',
        title: 'Túi Xách Mẫu',
        category: 'In Offset',
        description: 'Túi xách mẫu là sản phẩm in offset chất lượng cao, giúp bạn có được những chiếc túi xách đẹp mắt và bền bỉ.'
    },
    tuixachtd: {
        image: 'assets/images/tuixachtd.jpg',
        title: 'Túi Xách TĐ',
        category: 'In Offset',
        description: 'Túi xách TĐ là sản phẩm in offset chất lượng cao, giúp bạn có được những chiếc túi xách đẹp mắt và bền bỉ.'
    },
    gioithieu: {
        image: 'assets/images/gioithieu.jpg',
        title: 'Giới Thiệu In PP Và Quy Trình In',
        category: 'In Quảng Cáo',
        description: 'Giới thiệu in PP và quy trình in là sản phẩm in quảng cáo chất lượng cao, giúp bạn hiểu rõ hơn về quy trình in ấn và các sản phẩm in PP.'
    },
    instandee2: {
        image: 'assets/images/in-standee2.jpg',
        title: 'In Standee',
        category: 'In Quảng Cáo',
        description: 'In standee là sản phẩm in quảng cáo chất lượng cao, giúp bạn có được những tấm standee đẹp mắt và ấn tượng.'
    },
    instandee: {
        image: 'assets/images/in-standee.jpg',
        title: 'PP Chân Cuộn',
        category: 'In Quảng Cáo',
        description: 'PP chân cuộn là sản phẩm in quảng cáo chất lượng cao, giúp bạn có được những tấm PP chân cuộn đẹp mắt và bền bỉ.'
    },
    bangron: {
        image: 'assets/images/bangron.jpg',
        title: 'In Hiflex - Băng Rôn Quảng Cáo',
        category: 'In Quảng Cáo',
        description: 'In hiflex - băng rôn quảng cáo là sản phẩm in quảng cáo chất lượng cao, giúp bạn có được những tấm băng rôn đẹp mắt và bền bỉ.'
    },
    maycanmangkholon: {
        image: 'assets/images/maycanmangkholon.jpg',
        title: 'Máy Cán Màng Khổ Lớn',
        category: 'In Khổ Lớn',
        description: 'Máy cán màng khổ lớn là sản phẩm in khổ lớn chất lượng cao, giúp bạn có được những sản phẩm in ấn đẹp mắt và bền bỉ.'
    },
    c7000: {
        image: 'assets/images/C7000.jpg',
        title: 'Máy In Màu Konica C7000',
        category: 'In Khổ Lớn',
        description: 'Máy in màu Konica C7000 là sản phẩm in khổ lớn chất lượng cao, giúp bạn có được những sản phẩm in ấn đẹp mắt và bền bỉ.'
    },
    c6502: {
        image: 'assets/images/C6502.jpg',
        title: 'Máy In Màu Konica C6502',
        category: 'In Khổ Lớn',
        description: 'Máy in màu Konica C6502 là sản phẩm in khổ lớn chất lượng cao, giúp bạn có được những sản phẩm in ấn đẹp mắt và bền bỉ.'
    },
    maukholon: {
        image: 'assets/images/maukholon.jpg',
        title: 'Máy In Màu Khổ Lớn',
        category: 'In Khổ Lớn',
        description: 'Máy in màu khổ lớn là sản phẩm in khổ lớn chất lượng cao, giúp bạn có được những sản phẩm in ấn đẹp mắt và bền bỉ.'
    },
    trangden: {
        image: 'assets/images/trangden.jpg',
        title: 'Máy In Trắng Đen Khổ Lớn',
        category: 'In Khổ Lớn',
        description: 'Máy in trắng đen khổ lớn là sản phẩm in khổ lớn chất lượng cao, giúp bạn có được những sản phẩm in ấn đẹp mắt và bền bỉ.'
    },
    banvekholon: {
        image: 'assets/images/banvekholon.jpg',
        title: 'Bản Vẽ Khổ Lớn',
        category: 'Hồ Sơ Bản Vẽ',
        description: 'Bản vẽ khổ lớn là sản phẩm hồ sơ bản vẽ chất lượng cao, giúp bạn có được những bản vẽ đẹp mắt và chính xác.'
    },
    scanmaubanvekholon: {
        image: 'assets/images/scanmaubanvekholon.jpg',
        title: 'Scan Màu Bản Vẽ Khổ Lớn',
        category: 'Hồ Sơ Bản Vẽ',
        description: 'Scan màu bản vẽ khổ lớn là sản phẩm hồ sơ bản vẽ chất lượng cao, giúp bạn có được những bản scan đẹp mắt và chính xác.'
    },
    a0: {
        image: 'assets/images/a0.jpg',
        title: 'Bản Vẽ A0',
        category: 'Hồ Sơ Bản Vẽ',
        description: 'Bản vẽ A0 là sản phẩm hồ sơ bản vẽ chất lượng cao, giúp bạn có được những bản vẽ đẹp mắt và chính xác.'
    },
    hosohoancong: {
        image: 'assets/images/hosohoancong.jpg',
        title: 'Hồ Sơ Hoàn Công',
        category: 'Hồ Sơ Bản Vẽ',
        description: 'Hồ sơ hoàn công là sản phẩm hồ sơ bản vẽ chất lượng cao, giúp bạn có được những hồ sơ hoàn công đẹp mắt và chính xác.'
    },
    hsthau: {
        image: 'assets/images/hsthau.jpg',
        title: 'Hồ Sơ Thầu',
        category: 'Hồ Sơ Bản Vẽ',
        description: 'Hồ sơ thầu là sản phẩm hồ sơ bản vẽ chất lượng cao, giúp bạn có được những hồ sơ thầu đẹp mắt và chính xác.'
    }
};

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', function () {
    const productKey = getQueryParam('product');
    const product = products[productKey];

    if (product) {
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-category').textContent = product.category;
        document.getElementById('product-description').textContent = product.description;
    }
});