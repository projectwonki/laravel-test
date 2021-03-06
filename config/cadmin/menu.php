<?php
use Cactuar\Admin\Helpers\admin;

/*
keterangan akan ditambahkan
*/

return [
    'setting' => [
        'label' => 'Setting',
        'parent' => null,
        'fa' => 'wrench',
    ],
    'site-setting' => [
        'label' => 'Website Setting',
        'parent' => 'setting',
        'controller' => 'App\Http\Controllers\Admin\SettingController',
        'fa' => 'globe',
        'default-action' => 'config',
        'routes' => admin::moduleRoutes(['config']),
    ],

    /* tambahkan module lain disini */
    'parent-menu' => [
        'label' => 'Toko Umat',
        'parent' => null,
        'parent' => null,
        'fa' => 'cube',
    ],
    'master-store' => [
        'label' => 'Master Toko',
        'parent' => 'parent-menu',
        'fa' => 'check',
		'controller' => 'App\Http\Controllers\Admin\MasterStoreController',
        'routes' => admin::moduleRoutes(['index','edit','create','publish']),
    ],
    'master-supplier' => [
        'label' => 'Master Supplier',
        'parent' => 'parent-menu',
        'fa' => 'check',
		'controller' => 'App\Http\Controllers\Admin\MasterSupplierController',
        'routes' => admin::moduleRoutes(['index','edit','create','publish']),
    ],
    'master-product' => [
        'label' => 'Master Produk',
        'parent' => 'parent-menu',
        'fa' => 'check',
		'controller' => 'App\Http\Controllers\Admin\MasterProductController',
        'routes' => admin::moduleRoutes(['index','edit','create','publish']),
    ],
    'transction-order' => [
        'label' => 'Order',
        'parent' => 'parent-menu',
        'fa' => 'check',
		'controller' => 'App\Http\Controllers\Admin\TransactionOrderController',
        'routes' => admin::moduleRoutes(['index','edit','create']),
    ],

    // 'media' => [
    //     'label' => 'Media',
    //     'parent' => null,
    //     'fa' => 'photo',
    // ],
    // 'image' => [
    //     'label' => 'Image',
    //     'controller' => 'Cactuar\Admin\Http\Controllers\MediaImageController',
    //     'parent' => 'media',
    //     'fa'  => 'photo',
    //     'routes' => admin::moduleRoutes(['index','create','delete']),
    // ],
    // 'file' => [
    //     'label' => 'Document',
    //     'controller' => 'Cactuar\Admin\Http\Controllers\MediaFileController',
    //     'parent' => 'media',
    //     'fa'  => 'file-pdf-o',
    //     'routes' => admin::moduleRoutes(['index','create','delete']),
    // ],
    'log' => [
        'label' => 'Logs',
        'parent' => null,
        'fa' => 'terminal',
    ],
    'admin-log' => [
        'label' => 'Admin Log',
        'parent' => 'log',
        'controller' => 'Cactuar\Admin\Http\Controllers\LogController',
        'fa' => 'tags',
        'routes' => admin::moduleRoutes(['index','download']),
    ],

    /* ------- Additional Module ---------- *//*

    'menu' => [
        'label' => 'Menu',
        'parent' => 'content',
        'fa' => 'file',
		'controller' => 'App\Http\Controllers\Admin\MenuController',
        'routes' => admin::moduleRoutes(['index','edit','delete','create','publish']),
    ],
    'translation' => [
        'label' => 'Translation',
        'parent' => 'setting',
        'fa' => 'language',
        'controller' => 'Cactuar\Admin\Http\Controllers\TranslationController',
        'routes' => ['get' => ['index','edit'], 'post' => ['edit']],
    ],
    'email-log' => [
        'label' => 'Email Log',
        'parent' => 'log',
        'fa' => 'send-o',
        'controller' => 'Cactuar\Admin\Http\Controllers\EmailLogController',
        'routes' => admin::moduleRoutes(['index','download']),
    ]
    */
];
