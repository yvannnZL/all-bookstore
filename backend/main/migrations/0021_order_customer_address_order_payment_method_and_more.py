# Generated by Django 5.0.3 on 2024-05-14 03:05

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0020_remove_customeraddress_address_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='customer_address',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='orders', to='main.customeraddress'),
        ),
        migrations.AddField(
            model_name='order',
            name='payment_method',
            field=models.CharField(choices=[('gcash', 'GCash'), ('bpi', 'BPI'), ('cod', 'Cash on Delivery')], max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='phone_number',
            field=models.CharField(max_length=15, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='shipping_method',
            field=models.CharField(choices=[('pickup', 'Pickup'), ('deliver', 'Deliver'), ('shipping', 'Shipping')], max_length=20, null=True),
        ),
    ]